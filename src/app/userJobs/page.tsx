import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree1 from "@/components/Tables/TableThree1";
import TableTwo from "@/components/Tables/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

// export const metadata: Metadata = {
//   title: "job portal",
//   description:
//     "job portal",
// };

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="userjobs" />

      <div className="flex flex-col gap-10">
        <TableThree1 />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
