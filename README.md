# KM Portfolio — V14

V14 fixes the credential/project evidence viewer, improves Resume text contrast, slightly lightens the cyber theme, animates the KM identity mark, and adds project cards based on the reports supplied by the portfolio owner.

## Main updates
- Certificate and PDF evidence viewer now uses the full modal height with responsive desktop/mobile sizing.
- Resume headings, tags and descriptions are larger and more legible.
- KM monogram has a subtle orbit, shimmer and float effect.
- Theme is very slightly lighter while retaining purple, technology blue, burgundy, cyber red and copper.
- Projects tab includes CISSP Practical Security Workbook, CEH Capstone, and the three-track cybersecurity portfolio guide, alongside existing GRC/SIEM/ISMS/incident-response projects.
- Detailed reports open in the portfolio viewer and source documents can be downloaded where provided.

## Project report assets
- `assets/projects/cissp-practical-security-workbook.pdf` and `.docx`
- `assets/projects/ceh-capstone-project.pdf` and `.docx`
- `assets/projects/three-track-cybersecurity-portfolio-guide.pdf`

The CISSP report uses a fictional SecurePay Solutions scenario and states that reference evidence images are examples, not production execution claims. The CEH capstone asks for lab screenshots where applicable; add genuine lab screenshots before representing those exercises as personally executed. The three-track guide describes a red-team AD lab, a blue-team SOC lab, and a GRC risk assessment; it is presented as a guide rather than a claim that every lab was completed.

## Deployment
Use the existing repository:
`https://github.com/Karthikmani24/Portfolio_Karthikeyan-M/`

1. Extract the V14 ZIP.
2. Copy the extracted files into the repository root, replacing the previous files.
3. Commit and push to `main`.
4. In GitHub Settings → Pages, confirm GitHub Actions is selected.
5. Verify the Pages workflow under Actions.
6. Test the credential viewer, project report viewer, resume readability and mobile layout.

Live URL: `https://karthikmani24.github.io/Portfolio_Karthikeyan-M/`
