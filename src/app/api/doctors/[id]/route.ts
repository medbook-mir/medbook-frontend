import { NextRequest, NextResponse } from 'next/server'

const API_BASE_URL = 'https://www.api.medvisit.uz'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    
    // Fetch all doctors and find the one with matching ID
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
    
    if (!data.success || !data.data) {
      throw new Error('Invalid API response format')
    }

    // Find the doctor with matching ID
    const doctor = data.data.find((d: any) => d.doctor_id.toString() === id)
    
    if (!doctor) {
      return NextResponse.json(
        { 
          success: false, 
          code: 404, 
          message: 'Doctor not found' 
        },
        { status: 404 }
      )
    }

    // Return the doctor data in the expected format
    return NextResponse.json({
      success: true,
      code: 200,
      message: 'Doctor found',
      data: doctor
    })
  } catch (error) {
    console.error('Error fetching doctor:', error)
    return NextResponse.json(
      { 
        success: false, 
        code: 500, 
        message: 'Failed to fetch doctor data',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
