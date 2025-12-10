import { BaseClient } from '@/api/baseClient'
import { ApiResponseWithContent } from '@/types'
import { BookingType } from '@/types/booking-type'
import { AxiosResponse } from 'axios'

const urls = {
  getBookings: '/bookings/'
}

export class BookingAPI {
  constructor(private api: BaseClient) {}

  getBookings = async () => {
    const result: AxiosResponse<ApiResponseWithContent<BookingType[]>> = await this.api.get(
      urls.getBookings
    )
    return result
  }
}

export default new BookingAPI(BaseClient.getInstance())
