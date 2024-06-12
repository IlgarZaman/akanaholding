import * as React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

interface Talep {
  izinTuru: string;
  baslangicTarihi: string;
  bitisTarihi: string;
}

const TaleplerimSayfasi: React.FC = () => {
  const storedTalepler = localStorage.getItem("izinTalebi");
  const talep: Talep | null = storedTalepler ? JSON.parse(storedTalepler) : null;

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Taleplerim
      </Typography>
      {talep ? (
        <>
          <List>
            <ListItem>
              <ListItemText
                primary={`İzin Türü: ${talep.izinTuru}`}
                secondary={`Başlangıç Tarihi: ${talep.baslangicTarihi}, Bitiş Tarihi: ${talep.bitisTarihi}`}
              />
            </ListItem>
          </List>
          <Typography sx={{ color: "green" }}>Onay Bekliyor</Typography>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              localStorage.removeItem("izinTalebi");
              window.location.reload(); // Sayfayı yenileyerek formu sıfırlayalım
            }}
          >
            Talebi geri çek
          </Button>
        </>
      ) : (
        <Typography sx={{ color: "green" }}>
          Talebiniz bulunmamaktadır
        </Typography>
      )}
    </Container>
  );
};

export default TaleplerimSayfasi;
