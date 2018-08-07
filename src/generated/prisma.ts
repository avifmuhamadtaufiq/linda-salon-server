import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bookings: <T = Booking[]>(args: { where?: BookingWhereInput, orderBy?: BookingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    items: <T = Item[]>(args: { where?: ItemWhereInput, orderBy?: ItemOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    products: <T = Product[]>(args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    files: <T = File[]>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    booking: <T = Booking | null>(args: { where: BookingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    item: <T = Item | null>(args: { where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    product: <T = Product | null>(args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bookingsConnection: <T = BookingConnection>(args: { where?: BookingWhereInput, orderBy?: BookingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    itemsConnection: <T = ItemConnection>(args: { where?: ItemWhereInput, orderBy?: ItemOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    productsConnection: <T = ProductConnection>(args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBooking: <T = Booking>(args: { data: BookingCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createItem: <T = Item>(args: { data: ItemCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createProduct: <T = Product>(args: { data: ProductCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBooking: <T = Booking | null>(args: { data: BookingUpdateInput, where: BookingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateItem: <T = Item | null>(args: { data: ItemUpdateInput, where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProduct: <T = Product | null>(args: { data: ProductUpdateInput, where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBooking: <T = Booking | null>(args: { where: BookingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteItem: <T = Item | null>(args: { where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteProduct: <T = Product | null>(args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBooking: <T = Booking>(args: { where: BookingWhereUniqueInput, create: BookingCreateInput, update: BookingUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertItem: <T = Item>(args: { where: ItemWhereUniqueInput, create: ItemCreateInput, update: ItemUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertProduct: <T = Product>(args: { where: ProductWhereUniqueInput, create: ProductCreateInput, update: ProductUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBookings: <T = BatchPayload>(args: { data: BookingUpdateInput, where?: BookingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyItems: <T = BatchPayload>(args: { data: ItemUpdateInput, where?: ItemWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProducts: <T = BatchPayload>(args: { data: ProductUpdateInput, where?: ProductWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateInput, where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBookings: <T = BatchPayload>(args: { where?: BookingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyItems: <T = BatchPayload>(args: { where?: ItemWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProducts: <T = BatchPayload>(args: { where?: ProductWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    booking: <T = BookingSubscriptionPayload | null>(args: { where?: BookingSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    item: <T = ItemSubscriptionPayload | null>(args: { where?: ItemSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    product: <T = ProductSubscriptionPayload | null>(args: { where?: ProductSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Booking: (where?: BookingWhereInput) => Promise<boolean>
  Item: (where?: ItemWhereInput) => Promise<boolean>
  Product: (where?: ProductWhereInput) => Promise<boolean>
  File: (where?: FileWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateBooking {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateItem {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Booking implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
  status: BookingStatus!
  userBooking(where: UserWhereInput): User
}

"""A connection to a list of items."""
type BookingConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BookingEdge]!
  aggregate: AggregateBooking!
}

input BookingCreateInput {
  status: BookingStatus
  items: ItemCreateManyWithoutBookingInput
  userBooking: UserCreateOneWithoutBookingInput
}

input BookingCreateManyWithoutUserBookingInput {
  create: [BookingCreateWithoutUserBookingInput!]
  connect: [BookingWhereUniqueInput!]
}

input BookingCreateOneWithoutItemsInput {
  create: BookingCreateWithoutItemsInput
  connect: BookingWhereUniqueInput
}

input BookingCreateWithoutItemsInput {
  status: BookingStatus
  userBooking: UserCreateOneWithoutBookingInput
}

input BookingCreateWithoutUserBookingInput {
  status: BookingStatus
  items: ItemCreateManyWithoutBookingInput
}

"""An edge in a connection."""
type BookingEdge {
  """The item at the end of the edge."""
  node: Booking!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BookingOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  status_ASC
  status_DESC
}

type BookingPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  status: BookingStatus!
}

enum BookingStatus {
  PENDING
  PROCCESS
  PAID
}

type BookingSubscriptionPayload {
  mutation: MutationType!
  node: Booking
  updatedFields: [String!]
  previousValues: BookingPreviousValues
}

input BookingSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BookingSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BookingSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BookingSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BookingWhereInput
}

input BookingUpdateInput {
  status: BookingStatus
  items: ItemUpdateManyWithoutBookingInput
  userBooking: UserUpdateOneWithoutBookingInput
}

input BookingUpdateManyWithoutUserBookingInput {
  create: [BookingCreateWithoutUserBookingInput!]
  connect: [BookingWhereUniqueInput!]
  disconnect: [BookingWhereUniqueInput!]
  delete: [BookingWhereUniqueInput!]
  update: [BookingUpdateWithWhereUniqueWithoutUserBookingInput!]
  upsert: [BookingUpsertWithWhereUniqueWithoutUserBookingInput!]
}

input BookingUpdateOneWithoutItemsInput {
  create: BookingCreateWithoutItemsInput
  connect: BookingWhereUniqueInput
  delete: Boolean
  update: BookingUpdateWithoutItemsDataInput
  upsert: BookingUpsertWithoutItemsInput
}

input BookingUpdateWithoutItemsDataInput {
  status: BookingStatus
  userBooking: UserUpdateOneWithoutBookingInput
}

input BookingUpdateWithoutUserBookingDataInput {
  status: BookingStatus
  items: ItemUpdateManyWithoutBookingInput
}

input BookingUpdateWithWhereUniqueWithoutUserBookingInput {
  where: BookingWhereUniqueInput!
  data: BookingUpdateWithoutUserBookingDataInput!
}

input BookingUpsertWithoutItemsInput {
  update: BookingUpdateWithoutItemsDataInput!
  create: BookingCreateWithoutItemsInput!
}

input BookingUpsertWithWhereUniqueWithoutUserBookingInput {
  where: BookingWhereUniqueInput!
  update: BookingUpdateWithoutUserBookingDataInput!
  create: BookingCreateWithoutUserBookingInput!
}

input BookingWhereInput {
  """Logical AND on all given filters."""
  AND: [BookingWhereInput!]

  """Logical OR on all given filters."""
  OR: [BookingWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BookingWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  status: BookingStatus

  """All values that are not equal to given value."""
  status_not: BookingStatus

  """All values that are contained in given list."""
  status_in: [BookingStatus!]

  """All values that are not contained in given list."""
  status_not_in: [BookingStatus!]
  items_every: ItemWhereInput
  items_some: ItemWhereInput
  items_none: ItemWhereInput
  userBooking: UserWhereInput
}

input BookingWhereUniqueInput {
  id: ID
}

scalar DateTime

type File implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  filename: String
  mimetype: String!
  encoding: String!
  url: String!
  userPhoto(where: UserWhereInput): User
}

"""A connection to a list of items."""
type FileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  filename: String
  mimetype: String!
  encoding: String!
  url: String!
  userPhoto: UserCreateOneWithoutPhotoInput
}

input FileCreateOneWithoutUserPhotoInput {
  create: FileCreateWithoutUserPhotoInput
  connect: FileWhereUniqueInput
}

input FileCreateWithoutUserPhotoInput {
  filename: String
  mimetype: String!
  encoding: String!
  url: String!
}

"""An edge in a connection."""
type FileEdge {
  """The item at the end of the edge."""
  node: File!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  filename_ASC
  filename_DESC
  mimetype_ASC
  mimetype_DESC
  encoding_ASC
  encoding_DESC
  url_ASC
  url_DESC
}

type FilePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  filename: String
  mimetype: String!
  encoding: String!
  url: String!
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FileWhereInput
}

input FileUpdateInput {
  filename: String
  mimetype: String
  encoding: String
  url: String
  userPhoto: UserUpdateOneWithoutPhotoInput
}

input FileUpdateOneWithoutUserPhotoInput {
  create: FileCreateWithoutUserPhotoInput
  connect: FileWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: FileUpdateWithoutUserPhotoDataInput
  upsert: FileUpsertWithoutUserPhotoInput
}

input FileUpdateWithoutUserPhotoDataInput {
  filename: String
  mimetype: String
  encoding: String
  url: String
}

input FileUpsertWithoutUserPhotoInput {
  update: FileUpdateWithoutUserPhotoDataInput!
  create: FileCreateWithoutUserPhotoInput!
}

input FileWhereInput {
  """Logical AND on all given filters."""
  AND: [FileWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  filename: String

  """All values that are not equal to given value."""
  filename_not: String

  """All values that are contained in given list."""
  filename_in: [String!]

  """All values that are not contained in given list."""
  filename_not_in: [String!]

  """All values less than the given value."""
  filename_lt: String

  """All values less than or equal the given value."""
  filename_lte: String

  """All values greater than the given value."""
  filename_gt: String

  """All values greater than or equal the given value."""
  filename_gte: String

  """All values containing the given string."""
  filename_contains: String

  """All values not containing the given string."""
  filename_not_contains: String

  """All values starting with the given string."""
  filename_starts_with: String

  """All values not starting with the given string."""
  filename_not_starts_with: String

  """All values ending with the given string."""
  filename_ends_with: String

  """All values not ending with the given string."""
  filename_not_ends_with: String
  mimetype: String

  """All values that are not equal to given value."""
  mimetype_not: String

  """All values that are contained in given list."""
  mimetype_in: [String!]

  """All values that are not contained in given list."""
  mimetype_not_in: [String!]

  """All values less than the given value."""
  mimetype_lt: String

  """All values less than or equal the given value."""
  mimetype_lte: String

  """All values greater than the given value."""
  mimetype_gt: String

  """All values greater than or equal the given value."""
  mimetype_gte: String

  """All values containing the given string."""
  mimetype_contains: String

  """All values not containing the given string."""
  mimetype_not_contains: String

  """All values starting with the given string."""
  mimetype_starts_with: String

  """All values not starting with the given string."""
  mimetype_not_starts_with: String

  """All values ending with the given string."""
  mimetype_ends_with: String

  """All values not ending with the given string."""
  mimetype_not_ends_with: String
  encoding: String

  """All values that are not equal to given value."""
  encoding_not: String

  """All values that are contained in given list."""
  encoding_in: [String!]

  """All values that are not contained in given list."""
  encoding_not_in: [String!]

  """All values less than the given value."""
  encoding_lt: String

  """All values less than or equal the given value."""
  encoding_lte: String

  """All values greater than the given value."""
  encoding_gt: String

  """All values greater than or equal the given value."""
  encoding_gte: String

  """All values containing the given string."""
  encoding_contains: String

  """All values not containing the given string."""
  encoding_not_contains: String

  """All values starting with the given string."""
  encoding_starts_with: String

  """All values not starting with the given string."""
  encoding_not_starts_with: String

  """All values ending with the given string."""
  encoding_ends_with: String

  """All values not ending with the given string."""
  encoding_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  userPhoto: UserWhereInput
}

input FileWhereUniqueInput {
  id: ID
  url: String
}

type Item implements Node {
  id: ID!
  amount: Int!
  product(where: ProductWhereInput): Product!
  booking(where: BookingWhereInput): Booking!
}

"""A connection to a list of items."""
type ItemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateInput {
  amount: Int!
  product: ProductCreateOneWithoutItemInput!
  booking: BookingCreateOneWithoutItemsInput!
}

input ItemCreateManyWithoutBookingInput {
  create: [ItemCreateWithoutBookingInput!]
  connect: [ItemWhereUniqueInput!]
}

input ItemCreateOneWithoutProductInput {
  create: ItemCreateWithoutProductInput
  connect: ItemWhereUniqueInput
}

input ItemCreateWithoutBookingInput {
  amount: Int!
  product: ProductCreateOneWithoutItemInput!
}

input ItemCreateWithoutProductInput {
  amount: Int!
  booking: BookingCreateOneWithoutItemsInput!
}

"""An edge in a connection."""
type ItemEdge {
  """The item at the end of the edge."""
  node: Item!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ItemOrderByInput {
  id_ASC
  id_DESC
  amount_ASC
  amount_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ItemPreviousValues {
  id: ID!
  amount: Int!
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
}

input ItemUpdateInput {
  amount: Int
  product: ProductUpdateOneWithoutItemInput
  booking: BookingUpdateOneWithoutItemsInput
}

input ItemUpdateManyWithoutBookingInput {
  create: [ItemCreateWithoutBookingInput!]
  connect: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  delete: [ItemWhereUniqueInput!]
  update: [ItemUpdateWithWhereUniqueWithoutBookingInput!]
  upsert: [ItemUpsertWithWhereUniqueWithoutBookingInput!]
}

input ItemUpdateOneWithoutProductInput {
  create: ItemCreateWithoutProductInput
  connect: ItemWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ItemUpdateWithoutProductDataInput
  upsert: ItemUpsertWithoutProductInput
}

input ItemUpdateWithoutBookingDataInput {
  amount: Int
  product: ProductUpdateOneWithoutItemInput
}

input ItemUpdateWithoutProductDataInput {
  amount: Int
  booking: BookingUpdateOneWithoutItemsInput
}

input ItemUpdateWithWhereUniqueWithoutBookingInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateWithoutBookingDataInput!
}

input ItemUpsertWithoutProductInput {
  update: ItemUpdateWithoutProductDataInput!
  create: ItemCreateWithoutProductInput!
}

input ItemUpsertWithWhereUniqueWithoutBookingInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateWithoutBookingDataInput!
  create: ItemCreateWithoutBookingInput!
}

input ItemWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  amount: Int

  """All values that are not equal to given value."""
  amount_not: Int

  """All values that are contained in given list."""
  amount_in: [Int!]

  """All values that are not contained in given list."""
  amount_not_in: [Int!]

  """All values less than the given value."""
  amount_lt: Int

  """All values less than or equal the given value."""
  amount_lte: Int

  """All values greater than the given value."""
  amount_gt: Int

  """All values greater than or equal the given value."""
  amount_gte: Int
  product: ProductWhereInput
  booking: BookingWhereInput
}

input ItemWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createBooking(data: BookingCreateInput!): Booking!
  createItem(data: ItemCreateInput!): Item!
  createProduct(data: ProductCreateInput!): Product!
  createFile(data: FileCreateInput!): File!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateBooking(data: BookingUpdateInput!, where: BookingWhereUniqueInput!): Booking
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  deleteUser(where: UserWhereUniqueInput!): User
  deleteBooking(where: BookingWhereUniqueInput!): Booking
  deleteItem(where: ItemWhereUniqueInput!): Item
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteFile(where: FileWhereUniqueInput!): File
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertBooking(where: BookingWhereUniqueInput!, create: BookingCreateInput!, update: BookingUpdateInput!): Booking!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyBookings(data: BookingUpdateInput!, where: BookingWhereInput): BatchPayload!
  updateManyItems(data: ItemUpdateInput!, where: ItemWhereInput): BatchPayload!
  updateManyProducts(data: ProductUpdateInput!, where: ProductWhereInput): BatchPayload!
  updateManyFiles(data: FileUpdateInput!, where: FileWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyBookings(where: BookingWhereInput): BatchPayload!
  deleteManyItems(where: ItemWhereInput): BatchPayload!
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Product implements Node {
  id: ID!
  name: String!
  stock: Int!
  item(where: ItemWhereInput): Item
}

"""A connection to a list of items."""
type ProductConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  name: String!
  stock: Int!
  item: ItemCreateOneWithoutProductInput
}

input ProductCreateOneWithoutItemInput {
  create: ProductCreateWithoutItemInput
  connect: ProductWhereUniqueInput
}

input ProductCreateWithoutItemInput {
  name: String!
  stock: Int!
}

"""An edge in a connection."""
type ProductEdge {
  """The item at the end of the edge."""
  node: Product!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  stock_ASC
  stock_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ProductPreviousValues {
  id: ID!
  name: String!
  stock: Int!
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
}

input ProductUpdateInput {
  name: String
  stock: Int
  item: ItemUpdateOneWithoutProductInput
}

input ProductUpdateOneWithoutItemInput {
  create: ProductCreateWithoutItemInput
  connect: ProductWhereUniqueInput
  delete: Boolean
  update: ProductUpdateWithoutItemDataInput
  upsert: ProductUpsertWithoutItemInput
}

input ProductUpdateWithoutItemDataInput {
  name: String
  stock: Int
}

input ProductUpsertWithoutItemInput {
  update: ProductUpdateWithoutItemDataInput!
  create: ProductCreateWithoutItemInput!
}

input ProductWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  stock: Int

  """All values that are not equal to given value."""
  stock_not: Int

  """All values that are contained in given list."""
  stock_in: [Int!]

  """All values that are not contained in given list."""
  stock_not_in: [Int!]

  """All values less than the given value."""
  stock_lt: Int

  """All values less than or equal the given value."""
  stock_lte: Int

  """All values greater than the given value."""
  stock_gt: Int

  """All values greater than or equal the given value."""
  stock_gte: Int
  item: ItemWhereInput
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  bookings(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking]!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  user(where: UserWhereUniqueInput!): User
  booking(where: BookingWhereUniqueInput!): Booking
  item(where: ItemWhereUniqueInput!): Item
  product(where: ProductWhereUniqueInput!): Product
  file(where: FileWhereUniqueInput!): File
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  bookingsConnection(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookingConnection!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

enum Role {
  CUSTOMER
  ADMIN
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  booking(where: BookingSubscriptionWhereInput): BookingSubscriptionPayload
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  email: String!
  password: String!
  photo(where: FileWhereInput): File
  role: Role!
  booking(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  role: Role
  photo: FileCreateOneWithoutUserPhotoInput
  booking: BookingCreateManyWithoutUserBookingInput
}

input UserCreateOneWithoutBookingInput {
  create: UserCreateWithoutBookingInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPhotoInput {
  create: UserCreateWithoutPhotoInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBookingInput {
  name: String!
  email: String!
  password: String!
  role: Role
  photo: FileCreateOneWithoutUserPhotoInput
}

input UserCreateWithoutPhotoInput {
  name: String!
  email: String!
  password: String!
  role: Role
  booking: BookingCreateManyWithoutUserBookingInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  role_ASC
  role_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  role: Role!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  role: Role
  photo: FileUpdateOneWithoutUserPhotoInput
  booking: BookingUpdateManyWithoutUserBookingInput
}

input UserUpdateOneWithoutBookingInput {
  create: UserCreateWithoutBookingInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutBookingDataInput
  upsert: UserUpsertWithoutBookingInput
}

input UserUpdateOneWithoutPhotoInput {
  create: UserCreateWithoutPhotoInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutPhotoDataInput
  upsert: UserUpsertWithoutPhotoInput
}

input UserUpdateWithoutBookingDataInput {
  name: String
  email: String
  password: String
  role: Role
  photo: FileUpdateOneWithoutUserPhotoInput
}

input UserUpdateWithoutPhotoDataInput {
  name: String
  email: String
  password: String
  role: Role
  booking: BookingUpdateManyWithoutUserBookingInput
}

input UserUpsertWithoutBookingInput {
  update: UserUpdateWithoutBookingDataInput!
  create: UserCreateWithoutBookingInput!
}

input UserUpsertWithoutPhotoInput {
  update: UserUpdateWithoutPhotoDataInput!
  create: UserCreateWithoutPhotoInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  role: Role

  """All values that are not equal to given value."""
  role_not: Role

  """All values that are contained in given list."""
  role_in: [Role!]

  """All values that are not contained in given list."""
  role_not_in: [Role!]
  photo: FileWhereInput
  booking_every: BookingWhereInput
  booking_some: BookingWhereInput
  booking_none: BookingWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'role_ASC' |
  'role_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BookingOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'status_ASC' |
  'status_DESC'

export type BookingStatus =   'PENDING' |
  'PROCCESS' |
  'PAID'

export type ItemOrderByInput =   'id_ASC' |
  'id_DESC' |
  'amount_ASC' |
  'amount_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ProductOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'stock_ASC' |
  'stock_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type FileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'filename_ASC' |
  'filename_DESC' |
  'mimetype_ASC' |
  'mimetype_DESC' |
  'encoding_ASC' |
  'encoding_DESC' |
  'url_ASC' |
  'url_DESC'

export type Role =   'CUSTOMER' |
  'ADMIN'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface BookingCreateOneWithoutItemsInput {
  create?: BookingCreateWithoutItemsInput
  connect?: BookingWhereUniqueInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  role?: Role
  role_not?: Role
  role_in?: Role[] | Role
  role_not_in?: Role[] | Role
  photo?: FileWhereInput
  booking_every?: BookingWhereInput
  booking_some?: BookingWhereInput
  booking_none?: BookingWhereInput
}

export interface FileCreateInput {
  filename?: String
  mimetype: String
  encoding: String
  url: String
  userPhoto?: UserCreateOneWithoutPhotoInput
}

export interface ProductWhereInput {
  AND?: ProductWhereInput[] | ProductWhereInput
  OR?: ProductWhereInput[] | ProductWhereInput
  NOT?: ProductWhereInput[] | ProductWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  stock?: Int
  stock_not?: Int
  stock_in?: Int[] | Int
  stock_not_in?: Int[] | Int
  stock_lt?: Int
  stock_lte?: Int
  stock_gt?: Int
  stock_gte?: Int
  item?: ItemWhereInput
}

export interface FileCreateOneWithoutUserPhotoInput {
  create?: FileCreateWithoutUserPhotoInput
  connect?: FileWhereUniqueInput
}

export interface ProductUpdateWithoutItemDataInput {
  name?: String
  stock?: Int
}

export interface FileCreateWithoutUserPhotoInput {
  filename?: String
  mimetype: String
  encoding: String
  url: String
}

export interface UserCreateOneWithoutPhotoInput {
  create?: UserCreateWithoutPhotoInput
  connect?: UserWhereUniqueInput
}

export interface BookingCreateManyWithoutUserBookingInput {
  create?: BookingCreateWithoutUserBookingInput[] | BookingCreateWithoutUserBookingInput
  connect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
}

export interface ItemWhereInput {
  AND?: ItemWhereInput[] | ItemWhereInput
  OR?: ItemWhereInput[] | ItemWhereInput
  NOT?: ItemWhereInput[] | ItemWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  amount?: Int
  amount_not?: Int
  amount_in?: Int[] | Int
  amount_not_in?: Int[] | Int
  amount_lt?: Int
  amount_lte?: Int
  amount_gt?: Int
  amount_gte?: Int
  product?: ProductWhereInput
  booking?: BookingWhereInput
}

export interface BookingCreateWithoutUserBookingInput {
  status?: BookingStatus
  items?: ItemCreateManyWithoutBookingInput
}

export interface BookingWhereInput {
  AND?: BookingWhereInput[] | BookingWhereInput
  OR?: BookingWhereInput[] | BookingWhereInput
  NOT?: BookingWhereInput[] | BookingWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  status?: BookingStatus
  status_not?: BookingStatus
  status_in?: BookingStatus[] | BookingStatus
  status_not_in?: BookingStatus[] | BookingStatus
  items_every?: ItemWhereInput
  items_some?: ItemWhereInput
  items_none?: ItemWhereInput
  userBooking?: UserWhereInput
}

export interface ItemCreateManyWithoutBookingInput {
  create?: ItemCreateWithoutBookingInput[] | ItemCreateWithoutBookingInput
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
}

export interface BookingSubscriptionWhereInput {
  AND?: BookingSubscriptionWhereInput[] | BookingSubscriptionWhereInput
  OR?: BookingSubscriptionWhereInput[] | BookingSubscriptionWhereInput
  NOT?: BookingSubscriptionWhereInput[] | BookingSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BookingWhereInput
}

export interface ItemCreateWithoutBookingInput {
  amount: Int
  product: ProductCreateOneWithoutItemInput
}

export interface FileWhereInput {
  AND?: FileWhereInput[] | FileWhereInput
  OR?: FileWhereInput[] | FileWhereInput
  NOT?: FileWhereInput[] | FileWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  filename?: String
  filename_not?: String
  filename_in?: String[] | String
  filename_not_in?: String[] | String
  filename_lt?: String
  filename_lte?: String
  filename_gt?: String
  filename_gte?: String
  filename_contains?: String
  filename_not_contains?: String
  filename_starts_with?: String
  filename_not_starts_with?: String
  filename_ends_with?: String
  filename_not_ends_with?: String
  mimetype?: String
  mimetype_not?: String
  mimetype_in?: String[] | String
  mimetype_not_in?: String[] | String
  mimetype_lt?: String
  mimetype_lte?: String
  mimetype_gt?: String
  mimetype_gte?: String
  mimetype_contains?: String
  mimetype_not_contains?: String
  mimetype_starts_with?: String
  mimetype_not_starts_with?: String
  mimetype_ends_with?: String
  mimetype_not_ends_with?: String
  encoding?: String
  encoding_not?: String
  encoding_in?: String[] | String
  encoding_not_in?: String[] | String
  encoding_lt?: String
  encoding_lte?: String
  encoding_gt?: String
  encoding_gte?: String
  encoding_contains?: String
  encoding_not_contains?: String
  encoding_starts_with?: String
  encoding_not_starts_with?: String
  encoding_ends_with?: String
  encoding_not_ends_with?: String
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
  userPhoto?: UserWhereInput
}

export interface ProductCreateOneWithoutItemInput {
  create?: ProductCreateWithoutItemInput
  connect?: ProductWhereUniqueInput
}

export interface BookingWhereUniqueInput {
  id?: ID_Input
}

export interface ProductCreateWithoutItemInput {
  name: String
  stock: Int
}

export interface ProductWhereUniqueInput {
  id?: ID_Input
}

export interface BookingCreateInput {
  status?: BookingStatus
  items?: ItemCreateManyWithoutBookingInput
  userBooking?: UserCreateOneWithoutBookingInput
}

export interface UserUpsertWithoutPhotoInput {
  update: UserUpdateWithoutPhotoDataInput
  create: UserCreateWithoutPhotoInput
}

export interface UserCreateOneWithoutBookingInput {
  create?: UserCreateWithoutBookingInput
  connect?: UserWhereUniqueInput
}

export interface UserUpdateOneWithoutPhotoInput {
  create?: UserCreateWithoutPhotoInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutPhotoDataInput
  upsert?: UserUpsertWithoutPhotoInput
}

export interface UserCreateWithoutBookingInput {
  name: String
  email: String
  password: String
  role?: Role
  photo?: FileCreateOneWithoutUserPhotoInput
}

export interface ItemUpsertWithoutProductInput {
  update: ItemUpdateWithoutProductDataInput
  create: ItemCreateWithoutProductInput
}

export interface ItemCreateInput {
  amount: Int
  product: ProductCreateOneWithoutItemInput
  booking: BookingCreateOneWithoutItemsInput
}

export interface ItemUpdateOneWithoutProductInput {
  create?: ItemCreateWithoutProductInput
  connect?: ItemWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ItemUpdateWithoutProductDataInput
  upsert?: ItemUpsertWithoutProductInput
}

export interface ItemUpsertWithWhereUniqueWithoutBookingInput {
  where: ItemWhereUniqueInput
  update: ItemUpdateWithoutBookingDataInput
  create: ItemCreateWithoutBookingInput
}

export interface BookingUpsertWithoutItemsInput {
  update: BookingUpdateWithoutItemsDataInput
  create: BookingCreateWithoutItemsInput
}

export interface BookingCreateWithoutItemsInput {
  status?: BookingStatus
  userBooking?: UserCreateOneWithoutBookingInput
}

export interface BookingUpdateOneWithoutItemsInput {
  create?: BookingCreateWithoutItemsInput
  connect?: BookingWhereUniqueInput
  delete?: Boolean
  update?: BookingUpdateWithoutItemsDataInput
  upsert?: BookingUpsertWithoutItemsInput
}

export interface ProductCreateInput {
  name: String
  stock: Int
  item?: ItemCreateOneWithoutProductInput
}

export interface UserUpsertWithoutBookingInput {
  update: UserUpdateWithoutBookingDataInput
  create: UserCreateWithoutBookingInput
}

export interface ItemCreateOneWithoutProductInput {
  create?: ItemCreateWithoutProductInput
  connect?: ItemWhereUniqueInput
}

export interface UserUpdateOneWithoutBookingInput {
  create?: UserCreateWithoutBookingInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutBookingDataInput
  upsert?: UserUpsertWithoutBookingInput
}

export interface ItemCreateWithoutProductInput {
  amount: Int
  booking: BookingCreateOneWithoutItemsInput
}

export interface BookingUpsertWithWhereUniqueWithoutUserBookingInput {
  where: BookingWhereUniqueInput
  update: BookingUpdateWithoutUserBookingDataInput
  create: BookingCreateWithoutUserBookingInput
}

export interface ProductUpsertWithoutItemInput {
  update: ProductUpdateWithoutItemDataInput
  create: ProductCreateWithoutItemInput
}

export interface FileSubscriptionWhereInput {
  AND?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  OR?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  NOT?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FileWhereInput
}

export interface ItemSubscriptionWhereInput {
  AND?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput
  OR?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput
  NOT?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ItemWhereInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface UserCreateWithoutPhotoInput {
  name: String
  email: String
  password: String
  role?: Role
  booking?: BookingCreateManyWithoutUserBookingInput
}

export interface FileWhereUniqueInput {
  id?: ID_Input
  url?: String
}

export interface UserUpdateInput {
  name?: String
  email?: String
  password?: String
  role?: Role
  photo?: FileUpdateOneWithoutUserPhotoInput
  booking?: BookingUpdateManyWithoutUserBookingInput
}

export interface FileUpdateInput {
  filename?: String
  mimetype?: String
  encoding?: String
  url?: String
  userPhoto?: UserUpdateOneWithoutPhotoInput
}

export interface FileUpdateOneWithoutUserPhotoInput {
  create?: FileCreateWithoutUserPhotoInput
  connect?: FileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: FileUpdateWithoutUserPhotoDataInput
  upsert?: FileUpsertWithoutUserPhotoInput
}

export interface ProductUpdateInput {
  name?: String
  stock?: Int
  item?: ItemUpdateOneWithoutProductInput
}

export interface FileUpdateWithoutUserPhotoDataInput {
  filename?: String
  mimetype?: String
  encoding?: String
  url?: String
}

export interface ItemUpdateInput {
  amount?: Int
  product?: ProductUpdateOneWithoutItemInput
  booking?: BookingUpdateOneWithoutItemsInput
}

export interface FileUpsertWithoutUserPhotoInput {
  update: FileUpdateWithoutUserPhotoDataInput
  create: FileCreateWithoutUserPhotoInput
}

export interface BookingUpdateInput {
  status?: BookingStatus
  items?: ItemUpdateManyWithoutBookingInput
  userBooking?: UserUpdateOneWithoutBookingInput
}

export interface BookingUpdateManyWithoutUserBookingInput {
  create?: BookingCreateWithoutUserBookingInput[] | BookingCreateWithoutUserBookingInput
  connect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
  disconnect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
  delete?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
  update?: BookingUpdateWithWhereUniqueWithoutUserBookingInput[] | BookingUpdateWithWhereUniqueWithoutUserBookingInput
  upsert?: BookingUpsertWithWhereUniqueWithoutUserBookingInput[] | BookingUpsertWithWhereUniqueWithoutUserBookingInput
}

export interface ProductSubscriptionWhereInput {
  AND?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  OR?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  NOT?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ProductWhereInput
}

export interface BookingUpdateWithWhereUniqueWithoutUserBookingInput {
  where: BookingWhereUniqueInput
  data: BookingUpdateWithoutUserBookingDataInput
}

export interface ItemWhereUniqueInput {
  id?: ID_Input
}

export interface BookingUpdateWithoutUserBookingDataInput {
  status?: BookingStatus
  items?: ItemUpdateManyWithoutBookingInput
}

export interface ItemUpdateWithoutProductDataInput {
  amount?: Int
  booking?: BookingUpdateOneWithoutItemsInput
}

export interface ProductUpdateOneWithoutItemInput {
  create?: ProductCreateWithoutItemInput
  connect?: ProductWhereUniqueInput
  delete?: Boolean
  update?: ProductUpdateWithoutItemDataInput
  upsert?: ProductUpsertWithoutItemInput
}

export interface ItemUpdateWithoutBookingDataInput {
  amount?: Int
  product?: ProductUpdateOneWithoutItemInput
}

export interface ItemUpdateWithWhereUniqueWithoutBookingInput {
  where: ItemWhereUniqueInput
  data: ItemUpdateWithoutBookingDataInput
}

export interface ItemUpdateManyWithoutBookingInput {
  create?: ItemCreateWithoutBookingInput[] | ItemCreateWithoutBookingInput
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  disconnect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  delete?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  update?: ItemUpdateWithWhereUniqueWithoutBookingInput[] | ItemUpdateWithWhereUniqueWithoutBookingInput
  upsert?: ItemUpsertWithWhereUniqueWithoutBookingInput[] | ItemUpsertWithWhereUniqueWithoutBookingInput
}

export interface BookingUpdateWithoutItemsDataInput {
  status?: BookingStatus
  userBooking?: UserUpdateOneWithoutBookingInput
}

export interface UserUpdateWithoutPhotoDataInput {
  name?: String
  email?: String
  password?: String
  role?: Role
  booking?: BookingUpdateManyWithoutUserBookingInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserCreateInput {
  name: String
  email: String
  password: String
  role?: Role
  photo?: FileCreateOneWithoutUserPhotoInput
  booking?: BookingCreateManyWithoutUserBookingInput
}

export interface UserUpdateWithoutBookingDataInput {
  name?: String
  email?: String
  password?: String
  role?: Role
  photo?: FileUpdateOneWithoutUserPhotoInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface FilePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  filename?: String
  mimetype: String
  encoding: String
  url: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface User extends Node {
  id: ID_Output
  name: String
  email: String
  password: String
  photo?: File
  role: Role
  booking?: Booking[]
}

export interface BatchPayload {
  count: Long
}

export interface AggregateFile {
  count: Int
}

export interface File extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  filename?: String
  mimetype: String
  encoding: String
  url: String
  userPhoto?: User
}

export interface Booking extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  items?: Item[]
  status: BookingStatus
  userBooking?: User
}

/*
 * An edge in a connection.

 */
export interface FileEdge {
  node: File
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface FileConnection {
  pageInfo: PageInfo
  edges: FileEdge[]
  aggregate: AggregateFile
}

export interface AggregateProduct {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface ProductConnection {
  pageInfo: PageInfo
  edges: ProductEdge[]
  aggregate: AggregateProduct
}

export interface ProductPreviousValues {
  id: ID_Output
  name: String
  stock: Int
}

/*
 * An edge in a connection.

 */
export interface ItemEdge {
  node: Item
  cursor: String
}

export interface ProductSubscriptionPayload {
  mutation: MutationType
  node?: Product
  updatedFields?: String[]
  previousValues?: ProductPreviousValues
}

export interface AggregateBooking {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface BookingConnection {
  pageInfo: PageInfo
  edges: BookingEdge[]
  aggregate: AggregateBooking
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  email: String
  password: String
  role: Role
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface Product extends Node {
  id: ID_Output
  name: String
  stock: Int
  item?: Item
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface BookingSubscriptionPayload {
  mutation: MutationType
  node?: Booking
  updatedFields?: String[]
  previousValues?: BookingPreviousValues
}

export interface AggregateItem {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface BookingEdge {
  node: Booking
  cursor: String
}

export interface ItemPreviousValues {
  id: ID_Output
  amount: Int
}

export interface ItemSubscriptionPayload {
  mutation: MutationType
  node?: Item
  updatedFields?: String[]
  previousValues?: ItemPreviousValues
}

export interface Item extends Node {
  id: ID_Output
  amount: Int
  product: Product
  booking: Booking
}

export interface BookingPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  status: BookingStatus
}

export interface AggregateUser {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface ItemConnection {
  pageInfo: PageInfo
  edges: ItemEdge[]
  aggregate: AggregateItem
}

/*
 * An edge in a connection.

 */
export interface ProductEdge {
  node: Product
  cursor: String
}

export interface FileSubscriptionPayload {
  mutation: MutationType
  node?: File
  updatedFields?: String[]
  previousValues?: FilePreviousValues
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

export type DateTime = Date | string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string