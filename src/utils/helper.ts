import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const mockDoctors = [
  {
    id: 1,
    name: 'Kathrin Schenk-Losse',
    specialty: 'Gynecologist',
    location: 'Tashkent, Chilanzar, Bunyodkor street 12/4 home 2A',
    rating: 4.5,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 2,
    name: 'Jane Doe',
    specialty: 'Cardiologist',
    location: 'Tashkent, Yakkasaray, Shota Rustaveli 33',
    rating: 4.8,
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    id: 3,
    name: 'Emily White',
    specialty: 'Neurologist',
    location: 'Tashkent, Yunusabad, Buyuk Ipak Yuli 7',
    rating: 3,
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg'
  },
  {
    id: 4,
    name: 'David Smith',
    specialty: 'Dermatologist',
    location: 'Tashkent, Mirzo Ulugbek, Amir Temur 45',
    rating: 4.2,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 5,
    name: 'Laura Brown',
    specialty: 'Pediatrician',
    location: 'Tashkent, Mirobod, Navoi street 18',
    rating: 4.7,
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    id: 6,
    name: 'Michael Johnson',
    specialty: 'Orthopedic',
    location: 'Tashkent, Shaykhontohur, Ziyolilar 22',
    rating: 4.3,
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg'
  },
  {
    id: 7,
    name: 'Sophia Lee',
    specialty: 'Endocrinologist',
    location: 'Tashkent, Yashnobod, Yunus Rajabiy 9',
    rating: 4.6,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 8,
    name: 'James Wilson',
    specialty: 'Ophthalmologist',
    location: 'Tashkent, Olmazor, Matbuotchilar 5',
    rating: 4.1,
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    id: 9,
    name: 'Anna Davis',
    specialty: 'Psychiatrist',
    location: 'Tashkent, Chilonzor, Afrosiyob 14',
    rating: 3.9,
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg'
  },
  {
    id: 10,
    name: 'Robert Martinez',
    specialty: 'General Surgeon',
    location: 'Tashkent, Sergeli, Bobur 11',
    rating: 4.4,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  }
]
