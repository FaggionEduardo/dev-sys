import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import ModalIcon from "../../components/ModalIcon/ModalIcon";

import styles from "assets/jss/material-kit-react/views/listPublicationStyle";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  CardHeader,
} from "@material-ui/core";
import { Trash2 as TrashIcon, Edit as EditIcon } from "react-feather";
import { Link } from "react-router-dom";
import { useAuth } from "hooks/auth";
const useStyles = makeStyles(styles);

export default function ListPublications() {
  const [publications, setPublications] = React.useState([]);
  const [reRender, setReRender] = React.useState(1);
  const classes = useStyles();
  let { api, user } = useAuth();
  api = api();
  useEffect(async () => {
    try {
      let res = await api.get("/publications/getAllByUser/" + user.id);
      setPublications(res.data);
    } catch (e) {
      console.log(e);
    }
  }, [reRender]);
  const Delete = async (id) => {
    try {
      await api.delete("/publications/" + id);
      setReRender(reRender + 1);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Header brand="Info Blog" fixed color="white" />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "right" }}
        >
          <Link className={classes.linkStyles} to="/add">
            <Button variant="contained" className={classes.addButton}>
              Adicionar Publicação
            </Button>
          </Link>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Título</TableCell>
                <TableCell>Descrição</TableCell>
                <TableCell>Imagem</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {publications.map(function (publication) {
                return (
                  <TableRow
                    key={publication.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {publication.title}
                    </TableCell>
                    <TableCell className={classes.description}>
                      {publication.description}
                    </TableCell>
                    <TableCell>
                      <a
                        href={
                          "http://localhost:4000/images/" + publication.image
                        }
                        rel="noreferrer"
                        target="_blank"
                      >
                        Imagem
                      </a>
                    </TableCell>
                    <TableCell>
                      <ModalIcon
                        className={classes.icon}
                        icon={TrashIcon}
                        buttonTitle="Deletar"
                        buttonStyle={{
                          margin: 10,
                          backgroundColor: "#8B0000",
                          color: "#fff",
                        }}
                        buttonAction={() => Delete(publication.id)}
                      >
                        <CardHeader
                          subheader={
                            "Tem certeza que deseja deletar publicação?"
                          }
                          title="Deletar publicação"
                        />
                      </ModalIcon>
                      <Link
                        className={classes.linkStyles}
                        to={"/edit/" + publication.id}
                      >
                        {" "}
                        <EditIcon className={classes.icon} />
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
