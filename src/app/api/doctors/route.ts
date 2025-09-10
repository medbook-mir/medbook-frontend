import { NextRequest, NextResponse } from 'next/server'

const API_BASE_URL = 'https://www.api.medvisit.uz'

export async function GET(request: NextRequest) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/doctors/`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching doctors:', error)
    return NextResponse.json(
      { 
        success: false, 
        code: 500, 
        message: 'Failed to fetch doctors data',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
