import React, { Fragment } from 'react';
import { Button } from '@component/index';
import { Link } from 'react-router-dom';

interface HomeProps {
    structure: { [propName: string]: DirectoryStructureItem[] };
}

const Home = (props: HomeProps) => {
    const { structure } = props;
    return (
        <div className="instance-home">
            {Object.keys(structure).map(key => (
                <Fragment key={key}>
                    <p>{key}</p>
                    {structure[key].map(item => (
                        <Link to={`/instance/${item.name}`} key={item.name}>
                            <Button radius={false} ghost={true}>
                                {item.name}
                            </Button>
                            <br />
                        </Link>
                    ))}
                </Fragment>
            ))}
        </div>
    );
};
export default Home;
