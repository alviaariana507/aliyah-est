import { Crew, SeamanBook, TravelDocument } from '@prisma/client'
import { ZodIssue } from 'zod'

export interface CreateCrewData {
  error: string | ZodIssue[] | null
  createdCrew: Crew | null
}

export interface EditCrewData {
  error: string | ZodIssue[] | null
  editedCrew: Crew | null
}

export interface EditTravelDocData {
  error: string | ZodIssue[] | null
  editedTravelDoc: TravelDocument | null
}

export interface EditSeamanBookData {
  error: string | ZodIssue[] | null
  editedSeamanBook: SeamanBook | null
}
