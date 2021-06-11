import React, { ReactNode } from "react";
import { AppContainer } from "./styles";
import "./App.css";
import { AddNewItem } from "./AddNewItem";
import { Column } from "./Column";
import { Card } from "./Card";
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/Actions";

export const App: React.FC = ({ children: ReactNode }) => {
  const { lists, dispatch } = useAppState();
  return (
    <AppContainer>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch(addList(text))}
      ></AddNewItem>
    </AppContainer>
  );
};
