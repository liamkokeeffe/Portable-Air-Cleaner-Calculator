import './FilterOptions.css';

export function FilterOptions() {
    return (
        <div id='filter-options'>
            <p>Filter by:</p>
            <hr />
            <p>Price (U.S dollars)</p>
            <div className='filter-option'>
                <p className='filter-option-unit-dollar'>$</p>
                <input className='filter-option-input' onChange={(e) => console.log('hi')} />
                <p className='filter-option-text-separator'>To</p>
                <p className='filter-option-unit-dollar'>$</p>
                <input className='filter-option-input' onChange={(e) => console.log('hi')} />
            </div>
            <hr />
            <p>Noise (decibels)</p>
            <div className='filter-option'>
                <input className='filter-option-input' onChange={(e) => console.log('hi')} />
                <p className='filter-option-unit-other'>dB</p>
                <p className='filter-option-text-separator'>To</p>
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
                <p className='filter-option-unit-other'>"</p>
            </div>
            <hr />
            <p>Power (Watts)</p>
            <div className='filter-option'>
                <input className='filter-option-input' onChange={(e) => console.log('hi')} />
                <p className='filter-option-unit-other'>W</p>
                <p className='filter-option-text-separator'>To</p>
                <input className='filter-option-input' onChange={(e) => console.log('hi')} />
                <p className='filter-option-unit-other'>W</p>
            </div>
        </div>
    );
}