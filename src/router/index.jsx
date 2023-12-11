import { lazy } from "react";
import { MainMenu } from "@/config/constants/mainMenu";

// Beranda
const Beranda = lazy(() => import("@/pages/beranda/Beranda"));

// Tentang Sidarasalimba
const Tentang = lazy(() => import("@/pages/tentang/Tentang"));

// Sebaran
const Sebaran = lazy(() => import("@/pages/sebaran/Sebaran"));

// Desa
const DaftarKecamatan = lazy(() => import("@/pages/desa/Daftarkecamatan"));
const DaftarDesa = lazy(() => import("@/pages/desa/DaftarDesa"));
const DetailDesa = lazy(() => import("@/pages/desa/DetailDesa"));

// Grafik
const Grafik = lazy(() => import("@/pages/grafik/Grafik"));

// Referensi Hukum
const ReferensiHukum = lazy(() =>
  import("@/pages/referensi-hukum/ReferensiHukum")
);

// Struktur Organisasi
const StrukturOrganisasi = lazy(() =>
  import("@/pages/struktur-organisasi/StrukturOrganisasi")
);

// Pengaduan
const Pengaduan = lazy(() => import("@/pages/pengaduan/Pengaduan"));
const AjukanPengaduan = lazy(() => import("@/pages/pengaduan/AjukanPengaduan"));
const DaftarPengaduan = lazy(() => import("@/pages/pengaduan/DaftarPengaduan"));

const coreRoutes = [
  {
    path: MainMenu.beranda,
    element: <Beranda />,
  },
  {
    path: MainMenu.tentang,
    element: <Tentang />,
  },
  {
    path: MainMenu.petaSebaran,
    element: <Sebaran />,
  },
  {
    path: MainMenu.daftarKecamatan,
    element: <DaftarKecamatan />,
  },
  {
    path: MainMenu.daftarDesa,
    element: <DaftarDesa />,
  },
  {
    path: MainMenu.detailDesa,
    element: <DetailDesa />,
  },
  {
    path: MainMenu.grafik,
    element: <Grafik />,
  },
  {
    path: MainMenu.strukturOrganisasi,
    element: <StrukturOrganisasi />,
  },
  {
    path: MainMenu.referensiHukum,
    element: <ReferensiHukum />,
  },
  {
    path: MainMenu.pengaduan,
    element: <Pengaduan />,
  },
  {
    path: MainMenu.ajukanPengaduan,
    element: <AjukanPengaduan />,
  },
  {
    path: MainMenu.daftarPengaduan,
    element: <DaftarPengaduan />,
  },
];

const routes = [...coreRoutes];
export default routes;
