import React from 'react';

const SectionWhite = () => {
    return (
        <section className={'section-white'}>
            <div className={'container'}>
                <h4 className={'fame'}>
                    Hall of fame
                </h4>
                <h2>
                    <span className={'best'}>ONE STORE</span>
                </h2>
                <h2>
                    <span className={'hall'}>EVERY TEAM</span>
                </h2>
                <h4 className={'team'}>
                    SELECT YOUR FAVORITE TEAM <br/>
                    TO VIEW IT'S JERSYS.
                </h4>
                <div className={'line'}>
                    <div>
                      <h3 className={'east'}>EAST</h3>
                    </div>
                    <div>
                        <h3 className={'west'}>WEST</h3>
                    </div>
                </div>



            </div>

        </section>
    );
};

export default SectionWhite;