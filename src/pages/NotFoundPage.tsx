import { Container, Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const Page404Section = styled('section')`
  padding: 40px 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FourZeroFourBg = styled('div')`
  background-image: url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif');
  height: 400px;
  background-position: center;
`;

const FourZeroFourText = styled('h1')`
  font-size: 80px;
  margin-bottom: 20px;
`;

const Link404 = styled(Button)`
  && {
    color: #fff !important;
    padding: 10px 20px;
    background: #39ac31;
    margin: 20px 0;
    display: inline-block;
  }
`;

const ContentBox404 = styled('div')`
  margin-top: -50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NotFoundPage = () => {
  return (
    <Page404Section>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <FourZeroFourBg>
              <FourZeroFourText>404</FourZeroFourText>
            </FourZeroFourBg>
            <ContentBox404>
              <Typography variant="h3" align="center">
                Page Not Found !
              </Typography>
              <Typography align="center">The page you are looking for is not available!</Typography>
              <Link404 href="/" variant="contained">
                Go to Home
              </Link404>
            </ContentBox404>
          </Grid>
        </Grid>
      </Container>
    </Page404Section>
  );
};

export default NotFoundPage;
