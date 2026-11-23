export function newsletterSignupAction(): string | undefined {
  const username = process.env.FWD_BUTTONDOWN_USERNAME?.trim()
  if (process.env.FWD_NEWSLETTER_SIGNUPS_OPEN !== "1" || !username) return undefined
  if (!/^[a-z0-9_-]+$/i.test(username)) return undefined

  return `https://buttondown.com/api/emails/embed-subscribe/${username}`
}
