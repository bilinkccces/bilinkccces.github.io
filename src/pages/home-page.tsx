import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import HubIcon from '@mui/icons-material/Hub'
import PublicIcon from '@mui/icons-material/Public'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import { motion } from 'framer-motion'
import { useLanguage } from '../components/language-context'
import type { Language } from '../content/i18n'

const MotionBox = motion.create(Box)

const navItems = [
  { key: 'nav.home', id: 'home' },
  { key: 'nav.about', id: 'about' },
  { key: 'nav.programs', id: 'programs' },
  { key: 'nav.vision', id: 'vision' },
  { key: 'nav.contact', id: 'contact' },
]

const langs: Language[] = ['zh-Hans', 'zh-Hant', 'en']
const labels: Record<Language, string> = { 'zh-Hans': '简', 'zh-Hant': '繁', en: 'EN' }

const programs = [
  { title: 'programs.p1t', body: 'programs.p1b', icon: <HubIcon color="primary" /> },
  { title: 'programs.p2t', body: 'programs.p2b', icon: <Diversity3Icon color="primary" /> },
  { title: 'programs.p3t', body: 'programs.p3b', icon: <VolunteerActivismIcon color="primary" /> },
  { title: 'programs.p4t', body: 'programs.p4b', icon: <PublicIcon color="primary" /> },
]

export default function HomePage() {
  const { t, lang, setLang } = useLanguage()

  return (
    <Box>
      <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
        <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1240, width: '100%', mx: 'auto' }}>
          <Stack>
            <Typography fontWeight={800}>{t('brand.cn')}</Typography>
            <Typography variant="caption" color="text.secondary">{t('brand.en')}</Typography>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Button key={item.id} href={`#${item.id}`} color="inherit">{t(item.key)}</Button>
            ))}
          </Stack>
          <Stack direction="row" spacing={0.5}>
            {langs.map((l) => (
              <IconButton
                key={l}
                size="small"
                onClick={() => setLang(l)}
                sx={{
                  border: '1px solid',
                  borderColor: lang === l ? 'primary.main' : 'divider',
                  bgcolor: lang === l ? 'primary.main' : 'transparent',
                  color: lang === l ? '#fff' : 'text.secondary',
                  borderRadius: 99,
                  px: 1,
                }}
              >
                <Typography variant="caption" fontWeight={700}>{labels[l]}</Typography>
              </IconButton>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>

      <Box id="home" sx={{ background: 'linear-gradient(135deg, #0b3a78 0%, #127a6f 100%)', color: '#fff', py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Chip icon={<AutoAwesomeIcon />} label="BILINK CCCES" sx={{ mb: 2, bgcolor: 'rgba(255,255,255,0.15)', color: '#fff' }} />
            <Typography variant="h2" sx={{ fontWeight: 800, maxWidth: 920, fontSize: { xs: '2rem', md: '3.4rem' }, lineHeight: 1.15 }}>
              {t('hero.title')}
            </Typography>
            <Typography sx={{ mt: 3, maxWidth: 940, fontSize: { xs: '1rem', md: '1.2rem' }, opacity: 0.95 }}>
              {t('hero.subtitle')}
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box id="about" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.3fr 1fr' }, gap: 4 }}>
            <Typography variant="h3" fontWeight={800} mb={2}>{t('about.title')}</Typography>
            <Typography color="text.secondary" mb={2}>{t('about.body1')}</Typography>
            <Typography color="text.secondary">{t('about.body2')}</Typography>
          <Box>
            <Card sx={{ height: '100%', background: 'linear-gradient(180deg,#ffffff,#edf3ff)' }}>
              <CardContent>
                <Typography variant="h4" fontWeight={800} mb={2}>{t('mission.title')}</Typography>
                <Typography fontWeight={700} mb={1}>{t('mission.body1')}</Typography>
                <Typography color="text.secondary">{t('mission.body2')}</Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>

      <Box id="programs" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#eef3fb' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight={800} mb={4}>{t('programs.title')}</Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
            {programs.map((item, i) => (
              <Box key={item.title}>
                <MotionBox initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Stack direction="row" spacing={1.2} alignItems="center" mb={1.2}>
                        {item.icon}
                        <Typography variant="h6" fontWeight={800}>{t(item.title)}</Typography>
                      </Stack>
                      <Typography color="text.secondary">{t(item.body)}</Typography>
                    </CardContent>
                  </Card>
                </MotionBox>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" id="vision" sx={{ py: { xs: 8, md: 10 } }}>
        <Card sx={{ background: 'linear-gradient(120deg,#0b3a78,#1f5ea7)', color: '#fff' }}>
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Typography variant="h4" fontWeight={800} mb={2}>{t('vision.title')}</Typography>
            <Typography sx={{ opacity: 0.95 }}>{t('vision.body')}</Typography>
          </CardContent>
        </Card>
      </Container>

      <Box id="contact" sx={{ py: 8, borderTop: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight={800} mb={2}>{t('contact.title')}</Typography>
          <Typography color="text.secondary">{t('contact.email')}</Typography>
          <Typography color="text.secondary">{t('contact.web')}</Typography>
        </Container>
      </Box>
    </Box>
  )
}
