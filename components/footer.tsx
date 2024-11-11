import { Clock, Inbox, Mail, MapPinned, Phone } from "lucide-react";
import Container from "./container";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mb-8 md:my-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-3 md:gap-0 lg:grid-cols-4">
          <p className="text-xl font-bold">Folsom Lake Marina</p>
          <ul className="col-span-1 flex flex-col gap-2 lg:col-start-3">
            <li>
              <h3 className="font-semibold">Marina Office Hours</h3>
            </li>
            <li className="flex gap-2">
              <Clock />
              <p>Closed for Season</p>
            </li>
            <li>
              <h3 className="mt-2 font-semibold">State Park Hours</h3>
            </li>
            <li className="flex gap-2">
              <Clock />
              <p>6:00 am to 10:00 pm</p>
            </li>
          </ul>
          <ul className="col-span-1 flex flex-col gap-2">
            <li>
              <h3 className="font-semibold">Contact</h3>
            </li>
            <li className="flex gap-2">
              <MapPinned />
              <Link
                href="https://maps.google.com/?q=661 Green Valley Rd, El Dorado Hills, CA 95762"
                target="_blank"
                className="hover:underline"
              >
                661 Green Valley Rd, El Dorado Hills, CA 95762
              </Link>
            </li>
            <li className="flex gap-2">
              <Inbox />
              <a>P.O. Box 125, Folsom, CA. 95763</a>
            </li>
            <li className="flex gap-2">
              <Mail />
              <Link
                href="mailto:folsomlakemarina@gmail.com"
                className="hover:underline"
              >
                folsomlakemarina@gmail.com
              </Link>
            </li>
            <li className="flex gap-2">
              <Phone />
              <Link href="tel:(916)933-1300" className="hover:underline">
                (916) 933-1300
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
