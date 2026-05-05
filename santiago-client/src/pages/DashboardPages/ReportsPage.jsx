import { useRef } from 'react';
import { Typography, Grid, Paper, Box, Stack, Divider, Button } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PrintIcon from '@mui/icons-material/Print';

const card = {
  p: 2.5, pl: 3, position: 'relative', overflow: 'hidden', transition: 'border-color .25s',
  '&:hover': { borderColor: 'rgba(251, 191, 36, 0.35)' },
  '&::before': { content: '""', position: 'absolute', top: 16, bottom: 16, left: 0, width: '2px', bgcolor: 'primary.main', opacity: 0.85 },
};
const num = { fontVariantNumeric: 'tabular-nums' };

const SectionLabel = ({ reel, children }) => (
  <Typography variant="overline" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    <Box component="span" sx={{ color: 'primary.main', letterSpacing: '.22em' }}>REEL {reel}</Box>
    <Box component="span" sx={{ width: 18, height: '1px', bgcolor: 'divider' }} />
    {children}
  </Typography>
);

const stats = [
  { label: 'Avg Ticket',     value: '₱ 320',   trend: '+4%' },
  { label: 'Seat Fill',      value: '72%',     trend: '+6%' },
  { label: 'Session Length', value: '108 min', trend: '+2%' },
  { label: 'Retention',      value: '91%',     trend: '+3%' },
];

const ReportsPage = () => {
  const printRef = useRef(null);

  const handlePrint = () => {
    const printContent = printRef.current;
    if (!printContent) return;

    const printWindow = window.open('', '_blank', 'width=1200,height=900');
    if (!printWindow) return;

    const headMarkup = Array.from(
      document.querySelectorAll('style, link[rel="stylesheet"]')
    )
      .map((node) => node.outerHTML)
      .join('');

    const exportedAt = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(new Date());

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>CineVault — Box Office Report</title>
          ${headMarkup}
          <style>
            @page { size: A4; margin: 16mm; }
            * { box-sizing: border-box; }
            body {
              margin: 0;
              font-family: 'Manrope', Arial, Helvetica, sans-serif;
              background: #ffffff;
              color: #1f2937;
            }
            .report-shell { padding: 28px; }
            .report-header {
              margin-bottom: 24px;
              padding-bottom: 14px;
              border-bottom: 2px solid #fbbf24;
            }
            .report-header .eyebrow {
              font-size: 10px;
              letter-spacing: .26em;
              text-transform: uppercase;
              color: #b45309;
              font-weight: 700;
              margin: 0 0 6px;
            }
            .report-header h1 {
              margin: 0 0 6px;
              font-family: 'DM Serif Display', Georgia, serif;
              font-size: 30px;
              font-weight: 400;
              color: #111827;
            }
            .report-header p {
              margin: 0;
              font-size: 13px;
              color: #6b7280;
              line-height: 1.5;
            }
            .report-content .MuiPaper-root {
              box-shadow: none !important;
              border: 1px solid #e5e7eb !important;
              background: #ffffff !important;
              break-inside: avoid;
              page-break-inside: avoid;
              color: #1f2937 !important;
            }
            .report-content .MuiTypography-root { color: #1f2937 !important; }
            .report-content .MuiTypography-colorTextSecondary,
            .report-content [class*='colorTextSecondary'] { color: #6b7280 !important; }
            .report-content svg { max-width: 100%; }
          </style>
        </head>
        <body>
          <main class="report-shell">
            <header class="report-header">
              <p class="eyebrow">CineVault · Box Office Summary</p>
              <h1>The Marquee — Reports</h1>
              <p>Box-office analytics overview showing monthly ticket sales, monthly target, top auteurs, and revenue mix.</p>
              <p>Prepared on ${exportedAt}</p>
            </header>
            <section class="report-content">
              ${printContent.outerHTML}
            </section>
          </main>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <Box>
      <Box sx={{ mb: 3.5, pb: 2.5, borderBottom: '1px solid', borderColor: 'divider',
        backgroundImage: 'radial-gradient(520px circle at 0% 100%, rgba(251,191,36,0.09), transparent 55%)',
        mx: -3, px: 3, pt: 0.5 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={2}>
          <Box>
            <Typography variant="overline" color="primary">Box Office / Last 8 Months</Typography>
            <Stack direction="row" alignItems="baseline" justifyContent="space-between" flexWrap="wrap" sx={{ rowGap: 0.5 }}>
              <Typography variant="h4">The Marquee</Typography>
            </Stack>
            <Typography variant="overline" color="text.secondary" sx={num}>Updated 10:12 · 24 Apr 2026</Typography>
          </Box>
          <Stack direction="row" spacing={1.2} flexWrap="wrap">
            <Button variant="contained" disableElevation>Generate</Button>
            <Button variant="outlined" startIcon={<PrintIcon sx={{ fontSize: 16 }} />} onClick={handlePrint}>
              Export PDF
            </Button>
            <Button variant="outlined">Filter</Button>
          </Stack>
        </Stack>
      </Box>

      <Grid container spacing={3} ref={printRef}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Paper sx={card}>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={1.5}>
              <Box>
                <SectionLabel reel="01">Box Office</SectionLabel>
                <Typography variant="h6" sx={{ mt: 0.5 }}>Monthly Ticket Sales</Typography>
              </Box>
              <Stack direction="row" spacing={1.5}>
                <Stack direction="row" alignItems="center" spacing={0.7}><Box sx={{ width: 8, height: 8, bgcolor: '#fbbf24', borderRadius: '2px' }} /><Typography variant="caption" color="text.secondary" sx={num}>2024</Typography></Stack>
                <Stack direction="row" alignItems="center" spacing={0.7}><Box sx={{ width: 8, height: 8, bgcolor: '#a78bfa', borderRadius: '2px' }} /><Typography variant="caption" color="text.secondary" sx={num}>2023</Typography></Stack>
              </Stack>
            </Stack>
            <LineChart
              xAxis={[{ data: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'], scaleType: 'point' }]}
              series={[
                { data: [240, 280, 260, 340, 390, 430, 460, 520], label: '2024', curve: 'monotoneX', area: true, color: '#fbbf24' },
                { data: [180, 200, 210, 260, 300, 310, 330, 360], label: '2023', curve: 'monotoneX', color: '#a78bfa' },
              ]}
              height={300}
              slotProps={{ legend: { hidden: true } }}
            />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ ...card, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <SectionLabel reel="02">Gross</SectionLabel>
            <Typography variant="h6" sx={{ mt: 0.5 }}>Monthly Target</Typography>
            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Gauge width={200} height={180} value={72} valueMin={0} valueMax={100}
                sx={{ [`& .${gaugeClasses.valueText}`]: { fontSize: 30, fontFamily: "'DM Serif Display', serif" } }} />
            </Box>
            <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ width: '100%', gap: 2 }}>
              <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: '.12em', textTransform: 'uppercase' }}>Closing Goal</Typography>
              <Typography variant="caption" fontWeight={700} sx={num}>₱ 850k</Typography>
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Paper sx={card}>
            <SectionLabel reel="03">Auteurs</SectionLabel>
            <Typography variant="h6" sx={{ mt: 0.5, mb: 1 }}>Top Directors</Typography>
            <BarChart
              yAxis={[{ data: ['Chazelle','Villeneuve','Weir','Shyamalan','Scott'], scaleType: 'band' }]}
              series={[{ data: [1240, 1080, 960, 870, 790], label: 'Views', color: '#fbbf24' }]}
              layout="horizontal"
              height={280}
              margin={{ left: 90, right: 10, top: 10, bottom: 30 }}
              borderRadius={4}
              slotProps={{ legend: { hidden: true } }}
            />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={card}>
            <SectionLabel reel="04">Revenue</SectionLabel>
            <Typography variant="h6" sx={{ mt: 0.5, mb: 1 }}>Revenue Mix</Typography>
            <PieChart
              colors={['#fbbf24', '#f59e0b', '#a78bfa', '#60a5fa']}
              series={[{
                data: [
                  { id: 0, value: 45, label: 'Tickets' },
                  { id: 1, value: 28, label: 'Concessions' },
                  { id: 2, value: 18, label: 'Memberships' },
                  { id: 3, value: 9,  label: 'Merch' },
                ],
                innerRadius: 40, paddingAngle: 2, cornerRadius: 4,
              }]}
              height={280}
            />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <Paper sx={{ ...card, height: '100%' }}>
            <SectionLabel reel="05">Ledger</SectionLabel>
            <Typography variant="h6" sx={{ mt: 0.5, mb: 1.5 }}>Key Ratios</Typography>
            <Stack divider={<Divider flexItem />} spacing={1.25}>
              {stats.map((s) => (
                <Stack key={s.label} direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: '.15em', textTransform: 'uppercase' }}>{s.label}</Typography>
                  <Stack direction="row" spacing={0.8} alignItems="baseline">
                    <Typography variant="body2" fontWeight={600} sx={num}>{s.value}</Typography>
                    <Stack direction="row" alignItems="center" spacing={0.2} sx={{ color: 'success.main' }}>
                      <TrendingUpIcon sx={{ fontSize: 11 }} />
                      <Typography variant="caption" fontWeight={700} sx={num}>{s.trend}</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReportsPage;
