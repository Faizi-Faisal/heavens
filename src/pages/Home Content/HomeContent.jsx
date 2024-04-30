import React, { useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import './HomeContent.css';
import HomeList from './HomeList';

const FilterBar = () => {
    const [location, setLocation] = useState('Bangalore');
    const [budget, setBudget] = useState({ min: 5000, max: 10000 });
    const [gender, setGender] = useState('');
    const [preferredBy, setPreferredBy] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [isFixed, setIsFixed] = useState(false);

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleBudgetChange = (event) => {
        const { name, value } = event.target;
        const newBudget = { ...budget, [name]: parseInt(value) };

        // Ensure that the maximum budget doesn't go below the minimum selected
        if (name === 'min' && newBudget.max < newBudget.min) {
            newBudget.max = newBudget.min;
        } else if (name === 'max' && newBudget.max < newBudget.min) {
            newBudget.min = newBudget.max;
        }

        setBudget(newBudget);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handlePreferredByChange = (event) => {
        setPreferredBy(event.target.value);
    };

    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };

    return (
        <div className='FilterMenu'>
            <div className="dropdownfilter d-flex">
                <CustomButtonGroup>
                    <CustomButton variant="primary"><i class="fa-solid fa-bed"></i> &nbsp;&nbsp;PG / Hostel</CustomButton>
                </CustomButtonGroup>

                <div className="filter-menu-item">
                    <Dropdown>
                        <Dropdown.Toggle as={CustomToggle} variant="secondary" className="bg-success">Location &nbsp;&nbsp;<i class="fa-solid fa-caret-down"></i></Dropdown.Toggle>
                        <Dropdown.Menu>
                            <div className='SearchBarloc'>
                                <Form.Control type="text" placeholder="Search" />
                            </div>
                            <Dropdown.Item>{location}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="filter-menu-item">
                    <Dropdown>
                        <Dropdown.Toggle as={CustomToggle} variant="secondary" className="bg-success">Budget &nbsp;&nbsp;<i class="fa-solid fa-caret-down"></i></Dropdown.Toggle>
                        <Dropdown.Menu>
                            <input
                                type="range"
                                name="min"
                                value={budget.min}
                                min={5000}
                                max={budget.max}
                                step={1000}
                                onChange={handleBudgetChange}
                                style={{ width: '200px', height: '20px' }}
                            />
                            <input
                                type="range"
                                name="max"
                                value={budget.max}
                                min={budget.min}
                                max={10000}
                                step={1000}
                                onChange={handleBudgetChange}
                                style={{ width: '200px', height: '20px' }}
                            />
                            <p>Min: {budget.min} Max: {budget.max}</p>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="filter-menu-item">
                    <Dropdown>
                        <Dropdown.Toggle as={CustomToggle} variant="secondary" className="bg-success">Gender &nbsp;&nbsp;<i class="fa-solid fa-caret-down"></i></Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={handleGenderChange}>Male</Dropdown.Item>
                            <Dropdown.Item onClick={handleGenderChange}>Female</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="filter-menu-item">
                    <Dropdown>
                        <Dropdown.Toggle as={CustomToggle} variant="secondary" className="bg-success">Preferred by &nbsp;&nbsp;<i class="fa-solid fa-caret-down"></i></Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={handlePreferredByChange}>Students</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="filter-menu-item">
                <Dropdown>
                        <Dropdown.Toggle as={CustomToggle} variant="secondary" className="bg-success"><i class="fa-solid fa-filter"></i> &nbsp;Filter</Dropdown.Toggle>
                    </Dropdown>
                </div>
                
                <div className='sortpop'>
                <div className="filter-menu-item">
                <Dropdown>
                <Dropdown.Toggle as={CustomToggle} variant="secondary" className="bg-success">Sort By &nbsp;&nbsp;<i class="fa-solid fa-caret-down"></i></Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleSortByChange}>Option 1</Dropdown.Item>
                  <Dropdown.Item onClick={handleSortByChange}>Option 2</Dropdown.Item>
                  <Dropdown.Item onClick={handleSortByChange}>Option 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

                    &nbsp;
                </div>
                </div>
            </div>
        </div>
    );
};

const HomeContent = () => {
    return (
        <>
            <div className='loctitle'>
                <p className='LocSubTitle'><span className='heavensloc'>Heavens Living</span> <span className='heavensloc2'>/ Bangalore </span></p>
            </div>
            <FilterBar />
            <HomeList />
        </>
    );
};


const CustomButtonGroup = ({ children }) => {
    return <div className="custom-button-group">{children}</div>;
};

const CustomButton = ({ variant, children, ...props }) => {
    return <button className={`custom-button ${variant}`} {...props}>{children}</button>;
};

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <button
        className="custom-toggle"
        type="button"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </button>
));

export default HomeContent;
