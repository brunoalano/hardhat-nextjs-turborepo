import { Button } from "ui";
import deployments from "contracts/deployments.json";
import { Storage__factory } from "contracts/typechain";

export default function Web() {
  const c = Storage__factory.abi;
  return (
    <div>
      <h1>Hello Web</h1>
      <pre>
        <code>{JSON.stringify(deployments, null, 4)}</code>
      </pre>
      <pre>
        <code>{JSON.stringify(c)}</code>
      </pre>
      <Button />
    </div>
  );
}
