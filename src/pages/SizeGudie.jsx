import { IconRulerMeasure, IconMan, IconWoman, IconWorld } from '@tabler/icons-react';

function SizeGuide() {
  return (
    <main className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="border-bottom mb-5 pb-4 text-center text-md-start">
            <h1 className="display-5 fw-bold text-primary">Enduo Apparel Size Guide</h1>
            <p className="lead text-muted">
              Finding the right fit is essential. Use the charts below to determine your size. If you are between sizes, we recommend sizing up for a relaxed fit or sizing down for a tailored look.
            </p>
          </div>
          <section className="mb-5">
            <div className="card border-0 shadow-sm bg-light">
              <div className="card-body p-4">
                <h2 className="h4 fw-bold mb-4 d-flex align-items-center">
                  <IconRulerMeasure className="me-2 text-primary" stroke={2} /> 1. How to Measure
                </h2>
                <div className="row">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <h6 className="fw-bold mb-1 text-uppercase small">Chest</h6>
                    <p className="small text-secondary mb-0">Measure around the fullest part of your chest, keeping the tape horizontal.</p>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <h6 className="fw-bold mb-1 text-uppercase small">Waist</h6>
                    <p className="small text-secondary mb-0">Measure around the narrowest part of your waist (typically where your body bends).</p>
                  </div>
                  <div className="col-md-4">
                    <h6 className="fw-bold mb-1 text-uppercase small">Hips</h6>
                    <p className="small text-secondary mb-0">Measure around the fullest part of your hips while standing with your feet together.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-5">
            <h2 className="h4 fw-bold mb-3 d-flex align-items-center">
              <IconMan className="me-2 text-primary" stroke={2} /> 2. Men’s / Unisex Sizing
            </h2>
            <div className="table-responsive">
              <table className="table table-hover align-middle border">
                <thead className="table-dark">
                  <tr>
                    <th className="py-3">Size</th>
                    <th className="py-3">Chest (in)</th>
                    <th className="py-3">Waist (in)</th>
                    <th className="py-3">EU Size</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr><td>XS</td><td>32"-34"</td><td>26"-28"</td><td>44</td></tr>
                  <tr><td>S</td><td>35"-37"</td><td>29"-31"</td><td>46</td></tr>
                  <tr className="table-primary-subtle"><td>M</td><td>38"-40"</td><td>32"-34"</td><td>48</td></tr>
                  <tr><td>L</td><td>41"-43"</td><td>35"-37"</td><td>50</td></tr>
                  <tr><td>XL</td><td>44"-46"</td><td>38"-40"</td><td>52</td></tr>
                  <tr><td>XXL</td><td>47"-49"</td><td>41"-43"</td><td>54</td></tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="mb-5">
            <h2 className="h4 fw-bold mb-3 d-flex align-items-center">
              <IconWoman className="me-2 text-primary" stroke={2} /> 3. Women’s Sizing
            </h2>
            <div className="table-responsive">
              <table className="table table-hover align-middle border text-center">
                <thead className="table-dark">
                  <tr>
                    <th className="py-3">Size</th>
                    <th className="py-3">US</th>
                    <th className="py-3">Bust (in)</th>
                    <th className="py-3">Waist (in)</th>
                    <th className="py-3">Hips (in)</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr><td>XS</td><td>0-2</td><td>31"-32"</td><td>24"-25"</td><td>34"-35"</td></tr>
                  <tr><td>S</td><td>4-6</td><td>33"-42"</td><td>26"-27"</td><td>36"-37"</td></tr>
                  <tr className="table-primary-subtle"><td>M</td><td>8-10</td><td>35"-36"</td><td>28"-29"</td><td>38"-39"</td></tr>
                  <tr><td>L</td><td>12-14</td><td>37"-39"</td><td>30"-32"</td><td>40"-42"</td></tr>
                  <tr><td>XL</td><td>16-18</td><td>40"-42"</td><td>33"-35"</td><td>43"-45"</td></tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="mb-5">
            <h2 className="h4 fw-bold mb-3 d-flex align-items-center">
              <IconWorld className="me-2 text-primary" stroke={2} /> 4. International Conversion
            </h2>
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead className="bg-light">
                  <tr>
                    <th>Enduo Size</th>
                    <th>US</th>
                    <th>UK</th>
                    <th>EU</th>
                    <th>AU/NZ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="fw-bold">Small</td><td>4-6</td><td>8-10</td><td>36-38</td><td>8-10</td></tr>
                  <tr><td className="fw-bold">Medium</td><td>8-10</td><td>12-14</td><td>40-42</td><td>12-14</td></tr>
                  <tr><td className="fw-bold">Large</td><td>12-14</td><td>16-18</td><td>44-46</td><td>16-18</td></tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="p-4  text-dark rounded-4 shadow">
            <h2 className="h5 fw-bold mb-4 text-primary">Fit Definitions</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <h6 className="fw-bold mb-2">Oversized Fit</h6>
                <p className="small text-light-emphasis mb-0">Extra room in body/sleeves. Order normal size for intended look.</p>
              </div>
              <div className="col-md-4 border-start border-secondary px-md-4">
                <h6 className="fw-bold mb-2">Standard Fit</h6>
                <p className="small text-light-emphasis mb-0">A classic, comfortable fit following the shape of the body.</p>
              </div>
              <div className="col-md-4 border-start border-secondary ps-md-4">
                <h6 className="fw-bold mb-2">Slim Fit</h6>
                <p className="small text-light-emphasis mb-0">Contoured to the body. If you prefer a looser feel, size up.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}

export default SizeGuide;
