import { Typography, Grid, Paper, Box, Stack, Chip, Avatar, Divider, LinearProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const card = {
  p: 2.5, pl: 3, position: 'relative', overflow: 'hidden', transition: 'border-color .25s',
  '&:hover': { borderColor: 'rgba(251, 191, 36, 0.35)' },
  '&::before': { content: '""', position: 'absolute', top: 16, bottom: 16, left: 0, width: '2px', bgcolor: 'primary.main', opacity: 0.85 },
};
const num = { fontVariantNumeric: 'tabular-nums' };
const pulse = { '@keyframes pulse': { '0%,100%': { opacity: 1, transform: 'scale(1)' }, '50%': { opacity: 0.35, transform: 'scale(0.85)' } } };
const tierColor = { Director: 'primary', Critic: 'success', Premiere: 'secondary', Member: 'default' };

const columns = [
  {
    field: 'name', headerName: 'Member', flex: 1.4, minWidth: 240,
    renderCell: (p) => (
      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ height: '100%' }}>
        <Avatar sx={{ width: 34, height: 34, fontSize: 13, bgcolor: 'primary.main', color: 'primary.contrastText', fontWeight: 700 }}>
          {p.row.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
        </Avatar>
        <Box>
          <Typography variant="body2" fontWeight={600}>{p.row.name}</Typography>
          <Typography variant="caption" color="text.secondary">{p.row.email}</Typography>
        </Box>
      </Stack>
    ),
  },
  { field: 'tier', headerName: 'Tier', width: 130,
    renderCell: (p) => <Chip label={p.value} size="small" color={tierColor[p.value]} variant="outlined" /> },
  { field: 'reviews', headerName: 'Reviews', type: 'number', width: 110 },
  { field: 'joined', headerName: 'Joined', width: 130 },
  { field: 'last', headerName: 'Last Login', width: 160 },
  { field: 'status', headerName: 'Status', width: 120,
    renderCell: (p) => (
      <Chip label={p.value} size="small"
        color={p.value === 'Active' ? 'success' : 'default'}
        variant={p.value === 'Active' ? 'filled' : 'outlined'} />
    ),
  },
];

const rows = [
  { id: 1, name: 'Vergel Santiago',  email: 'vergel@cinevault.ph', tier: 'Director', reviews: 142, joined: '2021-03-12', last: '2026-04-24 10:12', status: 'Active' },
  { id: 2, name: 'Amara Ocampo',     email: 'amara@cinevault.ph',  tier: 'Premiere', reviews: 89,  joined: '2022-06-01', last: '2026-04-23 21:48', status: 'Active' },
  { id: 3, name: 'Renzo Villanueva', email: 'renzo@cinevault.ph',  tier: 'Critic',   reviews: 203, joined: '2020-11-04', last: '2026-04-24 08:03', status: 'Active' },
  { id: 4, name: 'Jia Reyes',        email: 'jia@cinevault.ph',    tier: 'Member',   reviews: 22,  joined: '2024-01-17', last: '2026-04-20 19:22', status: 'Inactive' },
  { id: 5, name: 'Marco Delacruz',   email: 'marco@cinevault.ph',  tier: 'Premiere', reviews: 61,  joined: '2023-02-28', last: '2026-04-22 23:10', status: 'Active' },
  { id: 6, name: 'Lia Domingo',      email: 'lia@cinevault.ph',    tier: 'Critic',   reviews: 177, joined: '2021-08-22', last: '2026-04-24 11:40', status: 'Active' },
  { id: 7, name: 'Tomas Aquino',     email: 'tomas@cinevault.ph',  tier: 'Member',   reviews: 14,  joined: '2025-02-09', last: '2026-04-18 14:55', status: 'Inactive' },
  { id: 8, name: 'Sofia Navarro',    email: 'sofia@cinevault.ph',  tier: 'Director', reviews: 312, joined: '2019-07-06', last: '2026-04-24 09:47', status: 'Active' },
  { id: 9, name: 'Kian Pascual',     email: 'kian@cinevault.ph',   tier: 'Member',   reviews: 8,   joined: '2025-12-30', last: '2026-04-19 17:11', status: 'Active' },
];

const UsersPage = () => {
  const total = rows.length;
  const active = rows.filter((u) => u.status === 'Active').length;
  const critics = rows.filter((u) => u.tier === 'Critic' || u.tier === 'Director').length;
  const reviews = rows.reduce((s, u) => s + u.reviews, 0);
  const kpis = [
    { label: 'Cardholders',     value: total,   hint: 'full roster' },
    { label: 'On the Floor',    value: active,  bar: Math.round((active / total) * 100) },
    { label: 'Critics & Above', value: critics, hint: 'press-credentialed' },
    { label: 'Lifetime Reviews', value: reviews, hint: 'since 2019' },
  ];

  return (
    <Box>
      <Box sx={{ mb: 3.5, pb: 2.5, borderBottom: '1px solid', borderColor: 'divider',
        backgroundImage: 'radial-gradient(520px circle at 0% 100%, rgba(251,191,36,0.09), transparent 55%)',
        mx: -3, px: 3, pt: 0.5 }}>
        <Stack direction="row" alignItems="center" spacing={1.2} mb={0.8}>
          <Box sx={{ ...pulse, width: 7, height: 7, borderRadius: '50%', bgcolor: 'primary.main', boxShadow: '0 0 10px #fbbf24', animation: 'pulse 2s ease-in-out infinite' }} />
          <Typography variant="overline" color="primary">House / Roster</Typography>
        </Stack>
        <Stack direction="row" alignItems="baseline" justifyContent="space-between" flexWrap="wrap" sx={{ width: '100%', rowGap: 0.5 }}>
          <Typography variant="h4">The House</Typography>
          <Typography variant="overline" color="text.secondary" sx={num}>
            {active} in seats · {total - active} at intermission
          </Typography>
        </Stack>
      </Box>

      <Grid container spacing={3} mb={3}>
        {kpis.map((k) => (
          <Grid size={{ xs: 6, md: 3 }} key={k.label}>
            <Paper sx={card}>
              <Typography variant="overline" color="text.secondary">{k.label}</Typography>
              <Typography variant="h3" sx={num}>{k.value}</Typography>
              {k.bar != null ? (
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                  <LinearProgress variant="determinate" value={k.bar} sx={{ flex: 1 }} />
                  <Typography variant="caption" color="text.secondary" fontWeight={700} sx={num}>{k.bar}%</Typography>
                </Stack>
              ) : (
                <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: '.1em', textTransform: 'uppercase' }}>{k.hint}</Typography>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 1.5 }}>
        <Typography variant="overline" color="text.secondary" sx={{ px: 1.5 }}>Member Ledger</Typography>
      </Divider>
      <Box sx={{ height: 480, mt: 2 }}>
        <DataGrid
          rows={rows} columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
          rowHeight={60}
        />
      </Box>
    </Box>
  );
};

export default UsersPage;
