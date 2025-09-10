import { CertificateIcon } from '@/utils/icons/doctor-icons'
import { DoctorCertificate } from '@/types/doctor-type'

interface CertificatesProps {
  certificates?: DoctorCertificate[]
}

const Certificates = ({ certificates = [] }: CertificatesProps) => {
  const Dot = () => <span className="h-1 w-1 rounded-full bg-[#A8ADB7]" />

  if (!certificates || certificates.length === 0) {
    return (
      <section className="border-b border-[#EBEBEB] pb-8">
        <h2 className="mb-7 text-[20px] leading-[100%] font-semibold">Certificates</h2>
        <div className="pt-4">
          <p className="text-[#515B6F]">No certificates available.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="border-b border-[#EBEBEB] pb-8">
      <h2 className="mb-7 text-[20px] leading-[100%] font-semibold">Certificates</h2>
      <div className="space-y-6">
        {certificates.map((certificate) => {
          const issueDate = new Date(certificate.issue_date).toLocaleDateString('en-US', { 
            month: 'long', 
            year: 'numeric' 
          })

          return (
            <div key={certificate.id} className="flex gap-4 pt-4 pb-3">
              <div className="shrink-0">
                <CertificateIcon />
              </div>
              <div className="text-[16px] leading-[160%]">
                <h3 className="mb-3 text-[18px] font-bold">{certificate.name}</h3>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium">{certificate.issuing_organization}</span>
                </div>
                <p className="py-2">Issued: {issueDate}</p>
                {certificate.expiry_date && (
                  <p>Expires: {new Date(certificate.expiry_date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    year: 'numeric' 
                  })}</p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Certificates
