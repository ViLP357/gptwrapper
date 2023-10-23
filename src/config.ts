export const inDevelopment = process.env.NODE_ENV === 'development'

export const inStaging = process.env.STAGING === 'true'

export const inProduction = !inStaging && process.env.NODE_ENV === 'production'

export const PUBLIC_URL = process.env.PUBLIC_URL || ''

export const DEFAULT_TOKEN_LIMIT =
  Number(process.env.DEFAULT_TOKEN_LIMIT) || 50_000

export const DEFAULT_MODEL = process.env.DEFAUL_MODEL || 'gpt-3.5-turbo'
export const DEFAUL_CONTEXT_LIMIT =
  Number(process.env.DEFAUL_CONTEXT_LIMIT) || 4_096

export const DEFAULT_RESET_CRON =
  process.env.DEFAULT_RESET_CRON || '0 0 1 */3 *'

export const validModels = [
  {
    name: 'gpt-3.5-turbo',
    deployment: process.env['gpt-3.5-turbo'] || 'curredev35',
    context: 4_096,
  },
  {
    name: 'gpt-3.5-turbo-16k',
    deployment: process.env['gpt-3.5-turbo-16k'] || 'curredev3516',
    context: 16_384,
  },
  {
    name: 'gpt-4',
    deployment: process.env['gpt-4'] || '',
    context: 8_192,
  },
]
