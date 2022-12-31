import { tokens } from '@app/admin/config/theme';
import {
  InputBase,
  Box,
  IconButton,
  useTheme,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  SvgIconTypeMap,
} from '@mui/material';
import { Link, useMatch, useRoute, useRouter } from '@tanstack/react-router';
import {
  CSSProperties,
  Dispatch,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  SetStateAction,
  useMemo,
} from 'react';
import { Home, Palette, Category, ProductionQuantityLimits } from '@mui/icons-material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface ItemProps {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  title: string;
  link?: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  icon: ReactNode;
}

interface ListItemProps {
  label: string;
  MuiIcon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
}

const ListItem = ({ label, MuiIcon }: ListItemProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ListItemButton>
      <MuiIcon
        sx={{
          color: theme.palette.mode === 'dark' ? colors.primary[100] : colors.primary[600],
          mr: 2,
        }}
      />
      <ListItemText
        primary={label}
        sx={{
          fontSize: '60px',
          color: theme.palette.mode === 'dark' ? colors.primary[100] : colors.primary[300],
        }}
      />
    </ListItemButton>
  );
};

interface TitleProps {
  label: string;
}

const Title = ({ label }: TitleProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 10px' }}>
      {label}
    </Typography>
  );
};

export const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const linkStyle: CSSProperties = useMemo(
    () => ({ color: colors.primary[200], textDecoration: 'none' }),
    [theme.palette.mode]
  );

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 300,
        bgcolor: colors.primary[400],
      }}
    >
      <Typography variant="h3" color={colors.grey[100]} textAlign="center" m={3}>
        Administration <br />
        l'Atelier d'Amélie
      </Typography>
      <nav aria-label="main mailbox folders">
        <List sx={{ ml: 4 }}>
          <Link to="/" style={linkStyle}>
            <ListItem label="Accueil" MuiIcon={Home} />
          </Link>
          <Title label="Galerie" />
          <Link to="/artworks" style={linkStyle}>
            <ListItem label="Oeuvres" MuiIcon={Palette} />
          </Link>
          <Link to="/categories" style={linkStyle}>
            <ListItem label="Catégories" MuiIcon={Category} />
          </Link>
          <Title label="Boutique" />
          <Link to="/artworks" style={linkStyle}>
            <ListItem label="Produits" MuiIcon={ProductionQuantityLimits} />
          </Link>
          <Link to="/artworks" style={linkStyle}>
            <ListItem label="Images" MuiIcon={ProductionQuantityLimits} />
          </Link>
          <Link to="/categories" style={linkStyle}>
            <ListItem label="Catégories" MuiIcon={Category} />
          </Link>
          <Link to="/categories" style={linkStyle}>
            <ListItem label="Sous-Catégories" MuiIcon={Category} />
          </Link>
        </List>
      </nav>
    </Box>
  );
};
