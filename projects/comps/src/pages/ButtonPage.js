import { GoBell, GoCloudDownload } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  // you don't have to do outline={true} for boolean props

  // mr-1 gives you some gap/space (tailwind)
  // margin-right-1 ...
  return (
    <div>
      <div>
        <Button primary rounded outline className="mb-5">
          <GoBell />
          primary
        </Button>
      </div>
      <div>
        <Button secondary rounded outline>
          <GoCloudDownload />
          primary
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          primary
        </Button>
      </div>
      <div>
        <Button warning rounded outline>
          primary
        </Button>
      </div>
      <div>
        <Button danger rounded outline>
          primary
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
