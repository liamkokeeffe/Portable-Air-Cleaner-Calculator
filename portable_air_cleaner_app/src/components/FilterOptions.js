import './FilterOptions.css';

export function FilterOptions() {
    return (
        <div id='filter-options'>
            <p>Filter by:</p>
            <hr />
            <p>Max Price (U.S dollars)</p>
            <div className='filter-option'>
                <p className='filter-option-unit-dollar'>$</p>
                <input className='filter-option-input' onChange={(e) => console.log('hi')} />
            </div>
            <hr />
            <p>Max Noise (decibels)</p>
            <div className='filter-option'>
                <input className='filter-option-input' onChange={(e) => console.log('hi')} />
                <p className='filter-option-unit-other'>dB</p>
            </div>
            <hr />
            <p>Max Size (dimensions in inches)</p>
            <div className='filter-option'>
                <input className='filter-option-input' onChange={(e) => console.log('hi')} />
                <p className='filter-option-unit-inch'>" x</p>
                <input className='filter-option-input' onChange={(e) => console.log('hi')} />
                <p className='filter-option-unit-inch'>" x</p>
                <input className='filter-option-input' onChange={(e) => console.log('hi')} />
                <p id='filter-option-unit-final-inch'>"</p>
            </div>
            <hr />
            <p>Max Power Usage (Watts)</p>
            <div className='filter-option'>
                <input className='filter-option-input' onChange={(e) => console.log('hi')} />
                <p className='filter-option-unit-other'>W</p>
            </div>
            <button onClick={() => {}}>Submit</button>
        </div>
    );
}