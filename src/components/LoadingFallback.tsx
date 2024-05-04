import { Box, CircularProgress } from '@mui/material';

const LoadingFallback = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <CircularProgress />
    </Box>
  );
};

export default LoadingFallback;
