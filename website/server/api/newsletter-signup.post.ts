import { array, boolean, object, parse, string } from 'valibot'

const NewsletterSignupSchema = object({
  email: string([]),
  communicationPermission: boolean(),
  interests: array(string()),
  products: array(string()),
})

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const validatedData = parse(NewsletterSignupSchema, body)

    // TODO: Implement the actual newsletter signup logic here
    // This could involve sending the data to a CRM, email service, or database

    // eslint-disable-next-line no-console
    console.log('Newsletter signup data:', validatedData)

    return { success: true, message: 'Newsletter signup successful' }
  }
  catch (error) {
    console.error('Newsletter signup error:', error)
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid newsletter signup data',
    })
  }
})
