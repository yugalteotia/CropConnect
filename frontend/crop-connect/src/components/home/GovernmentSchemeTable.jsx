import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pdfImage from '../../assets/pdfImage.png';

const headingStyles = {
    fontSize: '2rem', 
    color: '#333', 
    fontWeight: 'bold', 
    width:'80%',
    margin:'auto',
    paddingBottom: '1rem', 
    borderBottom: '2px solid #444', 
    
  };
  

const tableStyles = {
 
  width: '80%',
  margin:'auto',
  borderCollapse: 'collapse',
};

const thStyles = {
  width: '10%',
  border: '1px solid #ddd',
  padding: '8px',
  backgroundColor: 'green',
  textAlign: 'left',
};

const tdStyles = {
  border: '1px solid #ddd',
  padding: '4px',
};

const linkStyles = {
    color: 'blue',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '2px', // Reduced margin to reduce spacing
  };

function GovernmentSchemeTable() {

    const data = [
        {
            srNo: 1,
            title: 'Agriculture Infrastructure Fund',
            date: '12-06-2024',
            links: [
                { href: '/Documents/AIF_Guidelines_English_12Jun24.pdf', text: 'Download (341 KB)', img: pdfImage },
                { href: 'http://agriinfra.dac.gov.in/', text: 'Link' }
            ]
        },
        {
            srNo: 2,
            title: 'PM-Kisan Samman Nidhi',
            date: '28-12-2023',
            links: [
                { href: 'https://pmkisan.gov.in/', text: 'Link' }
            ]
        },
        {
            srNo: 3,
            title: 'ATMA',
            date: '03-10-2018',
            links: [
                { href: '/Documents/ATMA-Guidelines%202018.pdf', text: 'Download (1.17 MB)', img: pdfImage },
                { href: 'https://extensionreforms.da.gov.in/DashBoard_Statusatma.aspx', text: 'Link' }
            ]
        },
        {
            srNo: 4,
            title: 'AGMARKNET',
            date: '14-03-2014',
            links: [
                { href: '/Documents/Agmarknet_Guidelines.pdf', text: 'Download (1.03 MB)', img: pdfImage },
                { href: 'http://agmarknet.gov.in/PriceAndArrivals/arrivals1.aspx', text: 'Link' }
            ]
        },
        {
            srNo: 5,
            title: 'Horticulture',
            date: '05-04-2014',
            links: [
                { href: '/Documents/midh_Guidelines.pdf', text: 'Download (691.68 KB)', img: pdfImage },
                { href: 'http://midh.gov.in/nhmapplication/feedback/midhKPI.aspx', text: 'Link' }
            ]
        },
        {
            srNo: 6,
            title: 'Online Pesticide Registration',
            date: '23-09-2009',
            links: [
                { href: '/Documents/Pesticides_Registration.pdf', text: 'Download (1.25 MB)', img: pdfImage }
            ]
        },
        {
            srNo: 7,
            title: 'Plant Quarantine Clearance',
            date: '05-01-2011',
            links: [
                { href: '/Documents/Quarantine_Guidelinespdf.pdf', text: 'Download (8.89 MB)', img: pdfImage },
                { href: 'https://pqms.cgg.gov.in/pqms-angular/home', text: 'Link' }
            ]
        },
        {
            srNo: 8,
            title: 'DBT in Agriculture',
            date: '12-05-2014',
            links: [
                { href: '/Documents/Guideline_DBTinAgriculture.pdf', text: 'Download (749.24 KB)', img: pdfImage },
                { href: 'https://www.dbtdacfw.gov.in/', text: 'Link' }
            ]
        },
        {
            srNo: 9,
            title: 'Pradhanmantri Krishi Sinchayee Yojana',
            date: '06-05-2016',
            links: [
                { href: '/Documents/Guidelines_PMKSY.pdf', text: 'Download (244.46 KB)', img: pdfImage },
                { href: 'https://pmksy.gov.in/mis/frmDashboard.aspx', text: 'Link' }
            ]
        },
        {
            srNo: 10,
            title: 'Kisan Call Center',
            date: '01-05-2015',
            links: [
                { href: 'https://mkisan.gov.in/Home/KCCDashboard', text: 'Link' }
            ]
        },
        {
            srNo: 11,
            title: 'mKisan',
            date: '06-05-2015',
            links: [
                { href: 'https://mkisan.gov.in/', text: 'Link' }
            ]
        },
        {
            srNo: 12,
            title: 'Jaivik Kheti',
            date: '18-05-2015',
            links: [
                { href: '/Documents/Jaivik_Kheti_Guidelines.pdf', text: 'Download (1.24 MB)', img: pdfImage },
                { href: 'https://pgsindia-ncof.gov.in/home.aspx', text: 'Link' }
            ]
        },
        {
            srNo: 13,
            title: 'e-Nam',
            date: '04-10-2016',
            links: [
                { href: '/Documents/Enamguidelines.pdf', text: 'Download (459.07 KB)', img: pdfImage },
                { href: 'https://enam.gov.in/', text: 'Link' }
            ]
        },
        {
            srNo: 14,
            title: 'Soil Health Card',
            date: '01-09-2016',
            links: [
                { href: '/Documents/Guidelines_Soil%20Health%20Card.pdf', text: 'Download (1.1 MB)', img: pdfImage },
                { href: 'https://soilhealth.dac.gov.in/', text: 'Link' }
            ]
        },
        {
            srNo: 15,
            title: 'Pradhan Mantri Fasal Bima Yojana',
            date: '05-08-2017',
            links: [
                { href: '/Documents/PMFBY_Guidelines.pdf', text: 'Download (1.09 MB)', img: pdfImage },
                { href: 'https://pmfby.gov.in/ext/rpt/ssfr_17', text: 'Link' }
            ]
        }
    ];
    
    
  return (
    <>
    <h3 style={headingStyles}>GOVERNMENT MAJOR SCHEMES</h3>

    <table style={tableStyles} className="table table-bordered table-striped testdatatable">
        
      <thead>
        <tr>
          <th style={{ ...thStyles, width: '10%' }}>Sr. No</th>
          <th style={{ ...thStyles, width: '30%' }}>Title</th>
          <th style={{ ...thStyles, width: '10%' }}>Publish Date</th>
          <th style={{ ...thStyles, width: '10%' }}>Details</th>
        </tr>
      </thead>
      <tbody>
       {data.map(({ srNo, title, date, links }) => (
          <tr key={srNo}>
            <td style={tdStyles}>{srNo}</td>
            <td style={tdStyles}>{title}</td>
            <td style={tdStyles}>{date}</td>
            <td style={tdStyles}>
              {links.map((link, index) => (
                <div key={index}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" style={linkStyles}>
                    {link.text}
                    {link.img && <img src={link.img} alt="pdf" style={{ marginLeft: '5px' }} />}
                  </a>
                </div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

export default GovernmentSchemeTable;