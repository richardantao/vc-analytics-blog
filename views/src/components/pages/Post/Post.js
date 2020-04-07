import React from "react";
import Helmet from "react-helmet";

import Nav from "../../organisms/Nav";

export default ({ _id, title, category, body }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Nav/>
            <main role="">

            </main>
        </>
    );
};