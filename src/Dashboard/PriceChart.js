import highchartsConfig from './HighchartsConfig';
import React from 'react';
import {Tile} from "../Shared/Tile";
import {AppContext} from "../App/AppProvider";
import ReactHighcharts from 'react-highcharts';
import HighchartsTheme from './HighchartsTheme';
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);


export default function () {
    return(
        <AppContext.Consumer>
        {({}) =>
            <Tile>
                <ReactHighcharts config={highchartsConfig()}/>
            </Tile>
        }
    </AppContext.Consumer>
    )
}
