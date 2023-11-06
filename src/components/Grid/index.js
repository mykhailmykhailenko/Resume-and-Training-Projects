import React from 'react';
import GridContainer from './GridContainer';
import Row from './GridContainer/Row';
import Column from './GridContainer/Column';


const Grid = () => {
    return (
        <GridContainer>
            <Row>
                <Column colNum = "12">
                    100%
                </Column>
            </Row>
            <Row>
                <Column colNum = "6">
                    50%
                </Column>
                <Column colNum = "6">
                    50%
                </Column>
            </Row>
            <Row>
                <Column colNum = "3">
                    25%
                </Column>
                <Column colNum = "3">
                    25%
                </Column>
                <Column colNum = "3">
                    25%
                </Column>
                <Column colNum = "3">
                    25%
                </Column>
            </Row>
        </GridContainer>
    );
}

export default Grid;
