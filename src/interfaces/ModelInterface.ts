export interface Model<T> {
  create: (obj: T) => Promise<T>
  read: () => Promise<T[]>
  readById: (id: number) => Promise<T | null>
  readOne: (id: string) => Promise<T | null>
  update: (id: string, obj: T) => Promise<T | null>
  delete: (id: string) => Promise<T | null>
}
