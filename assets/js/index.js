let all = document.getElementById('btn-all')
let web = document.getElementById('btn-web')
let design = document.getElementById('btn-design')
let filter = document.getElementById('filter')

all.addEventListener('click', function () {
  all.classList.add('active')
  web.classList.remove('active')
  design.classList.remove('active')
  filter.innerHTML = `
      <div class="container">
            <div id="filter" class="row">
          <div class="col-lg-4 col-md-6">
            <div class="shadow portfolio-box">
              <img src="images/portfolio/portfolio-1.jpg" alt="portfolio 1 image" title="portfolio 1 picture" class="img-fluid">
              <div class="portfolio-info">
                <div class="caption">
                  <h4>project name goes here 1</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="shadow portfolio-box">
              <img src="images/portfolio/portfolio-2.jpg" alt="portfolio 2 image" title="portfolio 2 picture" class="img-fluid">
              <div class="portfolio-info">
                <div class="caption">
                  <h4>project name goes here 2</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="shadow portfolio-box">
              <img src="images/portfolio/portfolio-3.jpg" alt="portfolio 3 image" title="portfolio 3 picture" class="img-fluid">
              <div class="portfolio-info">
                <div class="caption">
                  <h4>project name goes here 3</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="shadow portfolio-box">
              <img src="images/portfolio/portfolio-4.jpg" alt="portfolio 4 image" title="portfolio 4 picture" class="img-fluid">
              <div class="portfolio-info">
                <div class="caption">
                  <h4>project name goes here 4</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="shadow portfolio-box">
              <img src="images/portfolio/portfolio-5.jpg" alt="portfolio 5 image" title="portfolio 5 picture" class="img-fluid">
              <div class="portfolio-info">
                <div class="caption">
                  <h4>project name goes here 5</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="shadow portfolio-box">
              <img src="images/portfolio/portfolio-6.jpg" alt="portfolio 6 image" title="portfolio 6 picture" class="img-fluid">
              <div class="portfolio-info">
                <div class="caption">
                  <h4>project name goes here 6</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="shadow portfolio-box">
              <img src="images/portfolio/portfolio-7.jpg" alt="portfolio 7 image" title="portfolio 7 picture" class="img-fluid">
              <div class="portfolio-info">
                <div class="caption">
                  <h4>project name goes here 7</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="shadow portfolio-box">
              <img src="images/portfolio/portfolio-8.jpg" alt="portfolio 8 image" title="portfolio 8 picture" class="img-fluid">
              <div class="portfolio-info">
                <div class="caption">
                  <h4>project name goes here 8</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="shadow portfolio-box">
              <img src="images/portfolio/portfolio-9.jpg" alt="portfolio 9 image" title="portfolio 9 picture" class="img-fluid">
              <div class="portfolio-info">
                <div class="caption">
                  <h4>project name goes here 9</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `
})
web.addEventListener('click', function () {
  all.classList.remove('active')
  web.classList.add('active')
  design.classList.remove('active')
  filter.innerHTML = `
      <div class="container">
            <div id="filter" class="row">
          <div class="col-lg-4 col-md-6">
            <div class="shadow portfolio-box">
              <img src="images/portfolio/portfolio-1.jpg" alt="portfolio 1 image" title="portfolio 1 picture" class="img-fluid">
              <div class="portfolio-info">
                <div class="caption">
                  <h4>project name goes here 1</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="shadow portfolio-box">
              <img src="images/portfolio/portfolio-3.jpg" alt="portfolio 3 image" title="portfolio 3 picture" class="img-fluid">
              <div class="portfolio-info">
                <div class="caption">
                  <h4>project name goes here 3</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="shadow portfolio-box">
              <img src="images/portfolio/portfolio-4.jpg" alt="portfolio 4 image" title="portfolio 4 picture" class="img-fluid">
              <div class="portfolio-info">
                <div class="caption">
                  <h4>project name goes here 4</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="shadow portfolio-box">
              <img src="images/portfolio/portfolio-5.jpg" alt="portfolio 5 image" title="portfolio 5 picture" class="img-fluid">
              <div class="portfolio-info">
                <div class="caption">
                  <h4>project name goes here 5</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="shadow portfolio-box">
              <img src="images/portfolio/portfolio-6.jpg" alt="portfolio 6 image" title="portfolio 6 picture" class="img-fluid">
              <div class="portfolio-info">
                <div class="caption">
                  <h4>project name goes here 6</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="shadow portfolio-box">
              <img src="images/portfolio/portfolio-7.jpg" alt="portfolio 7 image" title="portfolio 7 picture" class="img-fluid">
              <div class="portfolio-info">
                <div class="caption">
                  <h4>project name goes here 7</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
  `
})
design.addEventListener('click', function () {
  all.classList.remove('active')
  web.classList.remove('active')
  design.classList.add('active')
  filter.innerHTML = `
      <div class="container">
            <div id="filter" class="row">
          
          <div class="col-lg-4 col-md-6">
            <div class="shadow portfolio-box">
              <img src="images/portfolio/portfolio-2.jpg" alt="portfolio 2 image" title="portfolio 2 picture" class="img-fluid">
              <div class="portfolio-info">
                <div class="caption">
                  <h4>project name goes here 2</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="shadow portfolio-box">
              <img src="images/portfolio/portfolio-4.jpg" alt="portfolio 4 image" title="portfolio 4 picture" class="img-fluid">
              <div class="portfolio-info">
                <div class="caption">
                  <h4>project name goes here 4</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="shadow portfolio-box">
              <img src="images/portfolio/portfolio-6.jpg" alt="portfolio 6 image" title="portfolio 6 picture" class="img-fluid">
              <div class="portfolio-info">
                <div class="caption">
                  <h4>project name goes here 6</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="shadow portfolio-box">
              <img src="images/portfolio/portfolio-9.jpg" alt="portfolio 9 image" title="portfolio 9 picture" class="img-fluid">
              <div class="portfolio-info">
                <div class="caption">
                  <h4>project name goes here 9</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `
})
