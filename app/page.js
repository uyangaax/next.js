import { Counter } from "./Counter";
import { LightSwitch } from "./LightSwitch";
import { SecretMessage } from "./SecretMessage";
import "./Counter.css";

export default function Home() {
  return (
    <main>
      <h1> useState</h1>

      <section>
        <Counter />
      </section>

      <section>
        <LightSwitch />
      </section>
      <section>
        <SecretMessage />
      </section>
    </main>
  );
}
