import * as React from "react";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { enqueueSnackbar } from "notistack";

const IzinTalebiSayfasi: React.FC = () => {
  const [izinTuru, setIzinTuru] = React.useState("");
  const [baslangicTarihi, setBaslangicTarihi] = React.useState("");
  const [bitisTarihi, setBitisTarihi] = React.useState("");

  const handleIzinTuruDegisim = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIzinTuru((event.target as HTMLInputElement).value);
  };

  const handleBaslangicTarihiDegisim = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBaslangicTarihi((event.target as HTMLInputElement).value);
  };

  const handleBitisTarihiDegisim = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBitisTarihi((event.target as HTMLInputElement).value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const izinTalebi = {
      izinTuru: izinTuru,
      baslangicTarihi: baslangicTarihi,
      bitisTarihi: bitisTarihi,
    };
    localStorage.setItem("izinTalebi", JSON.stringify(izinTalebi));
    setIzinTuru("");
    setBaslangicTarihi("");
    setBitisTarihi("");
    enqueueSnackbar("Talep oluşturuldu.", { variant: "success" });
  };
  const storedTalepler = localStorage.getItem("izinTalebi");

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        İzin Talebi
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">İzin Türü</FormLabel>
              <RadioGroup
                aria-label="izinTuru"
                name="izinTuru"
                value={izinTuru}
                onChange={handleIzinTuruDegisim}
              >
                <FormControlLabel
                  value="Yıllık İzin"
                  control={<Radio />}
                  label="Yıllık İzin"
                />
                <FormControlLabel
                  value="Hastalık İzni"
                  control={<Radio />}
                  label="Hastalık İzni"
                />
                <FormControlLabel
                  value="Uzaktan Çalışma"
                  control={<Radio />}
                  label="Uzaktan Çalışma"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="baslangicTarihi"
              label="Başlangıç Tarihi"
              type="date"
              value={baslangicTarihi}
              onChange={handleBaslangicTarihiDegisim}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="bitisTarihi"
              label="Bitiş Tarihi"
              type="date"
              value={bitisTarihi}
              onChange={handleBitisTarihiDegisim}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            {storedTalepler?.length === undefined ? (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Gönder
              </Button>
            ) : (
              <Typography sx={{ color: "red" }} gutterBottom>
                Lütfen başvuruda bulunduğunuz talepin onayını bekleyin.
              </Typography>
            )}
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default IzinTalebiSayfasi;
