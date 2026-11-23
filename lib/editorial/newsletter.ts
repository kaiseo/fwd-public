export function newsletterSignupAction(): string | undefined {
  const configured = process.env.FWD_NEWSLETTER_SIGNUP_ACTION
  if (!configured) return undefined

  try {
    const url = new URL(configured)
    if (url.protocol === "https:" && !url.username && !url.password) return url.href
  } catch {
    return undefined
  }
}
