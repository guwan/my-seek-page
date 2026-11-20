import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'

export default function NotFound() {
  const { t } = useI18n()

  return (
    <div className="max-w-6xl mx-auto px-5 py-32 text-center">
      <div className="text-8xl font-extrabold gradient-text mb-6" dir="ltr">404</div>
      <h1 className="text-2xl font-bold mb-4">{t('notfound.title')}</h1>
      <p className="text-slate-500 mb-8">{t('notfound.desc')}</p>
      <Link to="/" className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold inline-block">
        {t('notfound.back')}
      </Link>
    </div>
  )
}
