import Header from '../Header';
import { Route } from 'wouter';

export default function HeaderExample() {
  return (
    <>
      <Route path="*">
        {() => <Header />}
      </Route>
    </>
  );
}
