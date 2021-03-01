# scand-100
SCAND 100 WI 2021 Media Project

## About
This project was created for Scandinavian 100 at The University of Washington, Winter quarter 2021.  

Technical details:
- Hosted on Microsoft Azure (`Standard B1ls (1 vcpus, 0.5 GiB memory)`)
- Domain from namecheap (free domains for students)
- Content served from NGINX via docker container
- CI/CD: Container automatically rebuilt with new content by GitHub Actions on push to main (`.github/workflows/deploy.yml`)
