import React from "react";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import AddBudgPage from "../components/AddBudgPage";
import AddIncomePage from "../components/AddIncomePage";
import EditBudgPage from "../components/EditBudgPage";
import EditIncomePage from "../components/EditIncomePage";
import NotFoundPage from "../components/NotFoundPage";
import BudgItDashboardPage from "../components/BudgItDashboardPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const AppRouter = () => (
  <HistoryRouter history={history}>
    <div>
      <Routes>
        <Route exact path="/" element={<PublicRoute />}>
          <Route exact path="/" element={<LoginPage />}></Route>
        </Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <BudgItDashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/create/expense"
          element={
            <PrivateRoute>
              <AddBudgPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/create/income"
          element={
            <PrivateRoute>
              <AddIncomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/expense/:id"
          element={
            <PrivateRoute>
              <EditBudgPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/income/:id"
          element={
            <PrivateRoute>
              <EditIncomePage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </HistoryRouter>
);

export default AppRouter;
