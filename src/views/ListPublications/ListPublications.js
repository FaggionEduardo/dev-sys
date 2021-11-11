import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";

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
} from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function ListPublications() {
  const classes = useStyles();
  const publications = [
    {
      id: 1,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat nisl arcu, eu luctus ante congue eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris malesuada nisi nibh. Suspendisse in augue urna. Phasellus ligula nunc, sodales ut quam sed, dictum faucibus nisi. Nullam imperdiet placerat odio.",
      img: "/publication.jpg",
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat nisl arcu, eu luctus ante congue eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris malesuada nisi nibh. Suspendisse in augue urna. Phasellus ligula nunc, sodales ut quam sed, dictum faucibus nisi. Nullam imperdiet placerat odio.",
      img: "/publication.jpg",
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat nisl arcu, eu luctus ante congue eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris malesuada nisi nibh. Suspendisse in augue urna. Phasellus ligula nunc, sodales ut quam sed, dictum faucibus nisi. Nullam imperdiet placerat odio.",
      img: "/publication.jpg",
    },
    {
      id: 4,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat nisl arcu, eu luctus ante congue eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris malesuada nisi nibh. Suspendisse in augue urna. Phasellus ligula nunc, sodales ut quam sed, dictum faucibus nisi. Nullam imperdiet placerat odio.",
      img: "/publication.jpg",
    },
  ];

  return (
    <div>
      <Header brand="Info Blog" fixed color="white" />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "right" }}
        >
          <Button variant="contained" className={classes.addButton}>
            Adicionar Publicação
          </Button>
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
                        href={publication.img}
                        rel="noreferrer"
                        target="_blank"
                      >
                        Imagem
                      </a>
                    </TableCell>
                    <TableCell>
                      <ModalIcon icon={Trash}></ModalIcon>
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
