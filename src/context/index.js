/**
  This file is used for controlling the global states of the components,
  you can customize the states for the different components here.
*/

import { createContext, useContext, useReducer, useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

//  main context
const MaterialUI = createContext();

// Setting custom name for the context which is visible on react dev tools
MaterialUI.displayName = "MaterialUIContext";

//  reducer
function reducer(state, action) {
  switch (action.type) {
    case "MINI_SIDENAV": {
      return { ...state, miniSidenav: action.value };
    }
    case "TRANSPARENT_SIDENAV": {
      return { ...state, transparentSidenav: action.value };
    }
    case "WHITE_SIDENAV": {
      return { ...state, whiteSidenav: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    case "DIRECTION": {
      return { ...state, direction: action.value };
    }
    case "LAYOUT": {
      return { ...state, layout: action.value };
    }
    case "DARKMODE": {
      return { ...state, darkMode: action.value };
    }
    case "STUDENTS_MASTER": {
      return { ...state, studentsMaster: action.value };
    }
    case "STUDENTS": {
      return { ...state, students: action.value };
    }
    case "SAVE_ACTIVE_BUTTON_SAVE": {
      return { ...state, activeButtonSave: action.value };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

//  context provider
function MaterialUIControllerProvider({ children }) {
  const initialState = {
    miniSidenav: false,
    transparentSidenav: false,
    whiteSidenav: false,
    sidenavColor: "info",
    transparentNavbar: true,
    fixedNavbar: true,
    openConfigurator: false,
    direction: "ltr",
    layout: "dashboard",
    darkMode: false,
    activeButtonSave: false,
    studentsMaster: [
      { id: 1, name: "students1", evaluation1: 1, evaluation2: 2, evaluation3: 3, evaluation4: 4 },
      { id: 2, name: "students2", evaluation1: 1, evaluation2: 2, evaluation3: 3, evaluation4: 4 },
      { id: 3, name: "students3", evaluation1: 1, evaluation2: 2, evaluation3: 3, evaluation4: 4 },
      { id: 4, name: "students4", evaluation1: 1, evaluation2: 2, evaluation3: 3, evaluation4: 4 },
      { id: 5, name: "students5", evaluation1: 1, evaluation2: 2, evaluation3: 3, evaluation4: 4 },
      { id: 6, name: "students6", evaluation1: 1, evaluation2: 2, evaluation3: 3, evaluation4: 4 },
      { id: 7, name: "students7", evaluation1: 1, evaluation2: 2, evaluation3: 3, evaluation4: 4 },
      { id: 8, name: "students8", evaluation1: 1, evaluation2: 2, evaluation3: 3, evaluation4: 4 },
      { id: 9, name: "students9", evaluation1: 1, evaluation2: 2, evaluation3: 3, evaluation4: 4 },
      {
        id: 10,
        name: "students10",
        evaluation1: 1,
        evaluation2: 2,
        evaluation3: 3,
        evaluation4: 4,
      },
      {
        id: 11,
        name: "students11",
        evaluation1: 1,
        evaluation2: 2,
        evaluation3: 3,
        evaluation4: 4,
      },
      {
        id: 12,
        name: "students12",
        evaluation1: 1,
        evaluation2: 2,
        evaluation3: 3,
        evaluation4: 4,
      },
      {
        id: 13,
        name: "students13",
        evaluation1: 1,
        evaluation2: 2,
        evaluation3: 3,
        evaluation4: 4,
      },
      {
        id: 14,
        name: "students14",
        evaluation1: 1,
        evaluation2: 2,
        evaluation3: 3,
        evaluation4: 4,
      },
      {
        id: 15,
        name: "students15",
        evaluation1: 1,
        evaluation2: 2,
        evaluation3: 3,
        evaluation4: 4,
      },
    ],
    students: [
      { id: 1, name: "students1", evaluation1: 1, evaluation2: 2, evaluation3: 3, evaluation4: 4 },
      { id: 2, name: "students2", evaluation1: 1, evaluation2: 2, evaluation3: 3, evaluation4: 4 },
      { id: 3, name: "students3", evaluation1: 1, evaluation2: 2, evaluation3: 3, evaluation4: 4 },
      { id: 4, name: "students4", evaluation1: 1, evaluation2: 2, evaluation3: 3, evaluation4: 4 },
      { id: 5, name: "students5", evaluation1: 1, evaluation2: 2, evaluation3: 3, evaluation4: 4 },
      { id: 6, name: "students6", evaluation1: 1, evaluation2: 2, evaluation3: 3, evaluation4: 4 },
      { id: 7, name: "students7", evaluation1: 1, evaluation2: 2, evaluation3: 3, evaluation4: 4 },
      { id: 8, name: "students8", evaluation1: 1, evaluation2: 2, evaluation3: 3, evaluation4: 4 },
      { id: 9, name: "students9", evaluation1: 1, evaluation2: 2, evaluation3: 3, evaluation4: 4 },
      {
        id: 10,
        name: "students10",
        evaluation1: 1,
        evaluation2: 2,
        evaluation3: 3,
        evaluation4: 4,
      },
      {
        id: 11,
        name: "students11",
        evaluation1: 1,
        evaluation2: 2,
        evaluation3: 3,
        evaluation4: 4,
      },
      {
        id: 12,
        name: "students12",
        evaluation1: 1,
        evaluation2: 2,
        evaluation3: 3,
        evaluation4: 4,
      },
      {
        id: 13,
        name: "students13",
        evaluation1: 1,
        evaluation2: 2,
        evaluation3: 3,
        evaluation4: 4,
      },
      {
        id: 14,
        name: "students14",
        evaluation1: 1,
        evaluation2: 2,
        evaluation3: 3,
        evaluation4: 4,
      },
      {
        id: 15,
        name: "students15",
        evaluation1: 1,
        evaluation2: 2,
        evaluation3: 3,
        evaluation4: 4,
      },
    ],
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  console.log("Controller", controller);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <MaterialUI.Provider value={value}>{children}</MaterialUI.Provider>;
}

//  custom hook for using context
function useMaterialUIController() {
  const context = useContext(MaterialUI);

  if (!context) {
    throw new Error(
      "useMaterialUIController should be used inside the MaterialUIControllerProvider."
    );
  }

  return context;
}

// Typechecking props for the MaterialUIControllerProvider
MaterialUIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Context module functions
const setMiniSidenav = (dispatch, value) => dispatch({ type: "MINI_SIDENAV", value });
const setTransparentSidenav = (dispatch, value) => dispatch({ type: "TRANSPARENT_SIDENAV", value });
const setWhiteSidenav = (dispatch, value) => dispatch({ type: "WHITE_SIDENAV", value });
const setSidenavColor = (dispatch, value) => dispatch({ type: "SIDENAV_COLOR", value });
const setTransparentNavbar = (dispatch, value) => dispatch({ type: "TRANSPARENT_NAVBAR", value });
const setFixedNavbar = (dispatch, value) => dispatch({ type: "FIXED_NAVBAR", value });
const setOpenConfigurator = (dispatch, value) => dispatch({ type: "OPEN_CONFIGURATOR", value });
const setDirection = (dispatch, value) => dispatch({ type: "DIRECTION", value });
const setLayout = (dispatch, value) => dispatch({ type: "LAYOUT", value });
const setDarkMode = (dispatch, value) => dispatch({ type: "DARKMODE", value });
const setStudentsMaster = (dispatch, value) => dispatch({ type: "STUDENTS_MASTER", value });
const setStudents = (dispatch, value) => dispatch({ type: "STUDENTS", value });
const setActiveButtonSave = (dispatch, value) =>
  dispatch({ type: "SAVE_ACTIVE_BUTTON_SAVE", value });

export {
  MaterialUIControllerProvider,
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
  setSidenavColor,
  setTransparentNavbar,
  setFixedNavbar,
  setOpenConfigurator,
  setDirection,
  setLayout,
  setDarkMode,
  setStudentsMaster,
  setStudents,
  setActiveButtonSave,
};
