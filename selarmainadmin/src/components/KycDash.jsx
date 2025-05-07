import axios from "axios";
import React, { useEffect, useState } from "react";

const KycDash = () => {
  const [kycData, setKycData] = useState([]);
  const baseUrl = "/api";
  //const baseUrl = "http://localhost:8527";

  useEffect(() => {
    const fetchKycData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/authKyc/getKyc`, {
          withCredentials: true,
        });
        setKycData(response.data.kyc);
      } catch (error) {
        console.error(error);
      }
    };
    fetchKycData();
  }, []);

  console.log(kycData);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">KYC Dashboard</h1>
      <div>
        {kycData.length === 0 ? (
          <p className="text-center text-gray-500">No KYC data available</p>
        ) : (
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-200 px-4 py-2">S/N</th>
                <th className="border border-gray-200 px-4 py-2">Full Name</th>
                <th className="border border-gray-200 px-4 py-2">Email</th>
                <th className="border border-gray-200 px-4 py-2">
                  PhoneNumber
                </th>
                <th className="border border-gray-200 px-4 py-2">
                  Date of Birth
                </th>
                <th className="border border-gray-200 px-4 py-2">Address</th>
              </tr>
            </thead>
            <tbody>
              {kycData.map((item) => (
                <tr key={item._id}>
                  <td className="border border-gray-200 px-4 py-2">
                    {kycData.length}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {item.fullname}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {item.email}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {item.PhoneNumber}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {new Date(item.Dateofbirth).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {item.Address}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default KycDash;
