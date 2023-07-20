const html_pdf = require("html-pdf");
const pptr = require("puppeteer");

const data = {
  name: "ZAID",
  DOB: "15/2/2002",
  location: "Lahore",
  department: "Development",
  workingDays: "25",
  designation: "Software Engineer",
  basicPay: "45000",
  allowances: [
    {
      name: "House Allowance",
      value: 2000,
    },
    {
      name: "Special Allowance",
      value: 400,
    },
    {
      name: "Conveyance Allowance",
      value: 3000,
    },
    {
      name: "ADD Special Allowance",
      value: 1000,
    },
    {
      name: "Shift Allowance",
      value: 700,
    },
    {
      name: "Bonus Allowance",
      value: 2000,
    },
    {
      name: "Medical Allowance",
      value: 7000,
    },
  ],
  deductions: [
    {
      name: "Provident Fund",
      value: 1900,
    },
    {
      name: "Professional Fund",
      value: 600,
    },
    {
      name: "Income Tax",
      value: 500,
    },
  ],
};

const createRows = (rowData) => {
  console.log(rowData);
  return `
    <tr class="my-[2px] flex justify-between px-10">
    <th
      scope="col"
      class="w-[200px] text-center text-sm font-medium text-gray-200 px-6 py-4 border-r font-bold"
      style="
          background-color: #020a0c;
          color: #ffffff;
          text-align: center;
          width: 200px
        "
    >
      ${rowData.name}:
    </th>
    <td class="text-left pl-5 flex items-center">${rowData.value}</td>
  </tr>
    `;
};

const generateHTML = (data) => {
  console.log(data);
  const content = `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid black;
        }
        table td {
          line-height: 25px;
          padding-left: 15px;
        }
        table th {
          background-color: #1b1912;
          color: #000000;
        }
      </style>
      <script defer src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
      <table border="1" class="">
        <tr
          height="100px"
          style="
            background-color: #020a0c;
            color: #ffffff;
            text-align: center;
            font-size: 24px;
            font-weight: 600;
            margin: 5px 0px;
          "
        >
          <td
            colspan="4"
            class="flex justify-center items-center text-xl text-gray-200 bg-[#1b1912] h-[100px]"
          >
            HRMS Limited
          </td>
        </tr>
        <tbody class="my-5 flex flex-col gap px-10" style="margin: 10px 0px">
          <tr className="border-b-2">
            <th
              scope="col"
              class="w-32 text-center text-sm font-medium text-gray-200 px-6 py-4 border-r font-bold"
              style="
                background-color: #020a0c;
                color: #ffffff;
                text-align: center;
                width: 200px
              "
            >
              Name:
            </th>
            <td class="text-left pl-5">${data.name}</td>
          </tr>
          <tr className="border-b-2">
            <th
              scope="col"
              class="w-32 text-center text-sm font-medium text-gray-200 px-6 py-4 border-r font-bold"
              style="
                background-color: #020a0c;
                color: #ffffff;
                text-align: center;
                width: 200px
              "
            >
              DOB:
            </th>
            <td className="text-left pl-5">${data.DOB}</td>
          </tr>
          <tr className="border-b-2">
            <th
              scope="col"
              class="w-32 text-center text-sm font-medium text-gray-200 px-6 py-4 border-r font-bold"
              style="
                background-color: #020a0c;
                color: #ffffff;
                text-align: center;
                width: 200px
              "
            >
              Location:
            </th>
            <td className="text-left pl-5">${data.location}</td>
          </tr>
          <tr className="border-b-2">
            <th
              scope="col"
              class="w-32 text-center text-sm font-medium text-gray-200 px-6 py-4 border-r font-bold"
              style="
                background-color: #020a0c;
                color: #ffffff;
                text-align: center;
                width: 200px
              "
            >
              Department:
            </th>
            <td className="text-left pl-5">${data.department}</td>
          </tr>
          <tr className="border-b-2">
            <th
              scope="col"
              class="w-32 text-center text-sm font-medium text-gray-200 px-6 py-4 border-r font-bold"
              style="
                background-color: #020a0c;
                color: #ffffff;
                text-align: center;
                width: 200px
              "
            >
              Working Days:
            </th>
            <td className="text-left pl-5">${data.workingDays}</td>
          </tr>
          <tr className="border-b-2">
            <th
              scope="col"
              class="w-32 text-center text-sm font-medium text-gray-200 px-6 py-4 border-r font-bold"
              style="
                background-color: #020a0c;
                color: #ffffff;
                text-align: center;
                width: 200px
              "
            >
              Designation:
            </th>
            <td className="text-left pl-5">${data.designation}</td>
          </tr>
          <tr className="border-b-2">
            <th
              scope="col"
              class="w-32 text-center text-sm font-medium text-gray-200 px-6 py-4 border-r font-bold"
              style="
                background-color: #020a0c;
                color: #ffffff;
                text-align: center;
                width: 200px
              "
            >
              Basic Pay:
            </th>
            <td className="text-left pl-5">${data.basicPay}</td>
          </tr>
        </tbody>
      </table>
      <!-- Allowances -->
      <div class="flex justify-between" style="display: flex; justify-content: space-between;">
        <div class="flex flex-col w-full mx-2" style="width: 100%; margin: 0px 5px;">
          <h3 class="text-center font-bold">Allowances</h3>
          <table border="" class="flex flex-col border-0">
            <tbody class="flex flex-col gap px-10 w-full" style="width: 100%">
              ${data.allowances.map((current) => createRows(current))}
  
              <tr class="my-[2px] flex justify-between px-10 bg-[#1b1912]">
                <th
                  scope="col"
                  class="w-[200px] text-center text-sm font-medium text-gray-200 px-6 py-4 font-bold"
                  style="background-color: #020a0c; color: #ffffff"
                >
                  Gross Pay:
                </th>
                <td class="text-left pl-5 flex items-center text-gray-200">
                  14000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex flex-col w-full mx-4" style="width: 100%; margin: 0px 5px;">
          <h3 class="text-center font-bold">Deductions</h3>
          <table border="" class="flex flex-col border-0">
            <tbody class="flex flex-col gap px-10 w-full">
              ${data.deductions.map((current) => createRows(current))}
  
              <tr class="my-[2px] flex justify-between px-10 bg-[#1b1912]">
                <th
                  scope="col"
                  class="w-[200px] text-center text-sm font-medium text-gray-200 px-6 py-4 font-bold"
                  style="background-color: #020a0c; color: #ffffff"
                >
                  Gross Pay:
                </th>
                <td class="text-left pl-5 flex items-center text-gray-200">
                  14000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        class="bg-[#1b1912] mx-4 text-gray-200 p-5 flex justify-between"
        style="
          width: 100%;
          background-color: #020a0c;
          color: white;
          display: flex;
          justify-content: space-between;
          padding: 0px 15px;
          margin-top: 2%;
        "
      >
        <h3><strong>NET PAY: <span>
        <strong>Rs.</strong><strong><span> </span>62000</strong>
      </span></strong></h3>
        
      </div>
    </body>
  </html>
  
  `;
  return content;
};

const generatePDF = (data, content = null) => {
  const html = generateHTML(data);
  console.log(html);
  html_pdf
    .create(html, { format: "Tabloid", orientation: "portrait" })
    .toFile("./Salary.pdf", (err, res) => {
      if (err) {
        throw new Error(err);
      }
      console.log(res);
    });
};

generatePDF(data);
