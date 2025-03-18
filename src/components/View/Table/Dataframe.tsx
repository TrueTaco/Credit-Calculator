import { Download } from "lucide-react";
import GlowWrapper from "../../Generics/GlowWrapper";

export default function Dataframe() {
  const data = Array.from({ length: 10 }, (_, i) => ({
    year: i + 1,
    repayment: "308€",
    interest: "172€",
  }));

  const handleDownload = () => {
    alert("Download wird implementiert!");
  };

  return (
    <div className="w-full p-2">
      <div
        className="flex h-96 w-full flex-col rounded-3xl bg-white/5 p-4 text-white shadow-lg md:w-96"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.08) 100%)",
        }}
      >
        {/* Scrollable Table Wrapper */}
        <div className="flex-1 overflow-hidden">
          <div className="scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800 h-full overflow-y-auto px-4">
            <table className="w-full border-separate border-spacing-y-2">
              <thead>
                <tr className="text-left text-sm font-semibold">
                  <th>Jahre</th>
                  <th>Tilgung</th>
                  <th>Zinsen</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <>
                    {index !== 0 && (
                      <tr>
                        <td colSpan={3}>
                          <hr className="w-full border-white/20" />
                        </td>
                      </tr>
                    )}
                    <tr key={index} className="text-left text-sm">
                      <td>{row.year}</td>
                      <td>{row.repayment}</td>
                      <td>{row.interest}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Download Button (Outside Scrollable Area) */}
        <div className="mt-4 flex justify-center">
          <button onClick={handleDownload} className="rounded-full p-1">
            <div className="relative">
              <GlowWrapper strength={35}>
                <Download size={20} />
              </GlowWrapper>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
