import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';

import costumeLibraryContent from '../lib/libraries/costumes3D.json';
import LibraryComponent from '../components/library/library.jsx';


class CostumeLibrary extends React.PureComponent {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleItemSelected'
        ]);
    }
    handleItemSelected (item) {
        const vmCostume = {
            name: item.name,
            rotationCenterX: item.info ? item.info[0] : 0,
            rotationCenterY: item.info ? item.info[1] : 0,
            bitmapResolution: item.info && item.info.length > 2 ? item.info[2] : 1,
            skinId: null
        };
        this.props.vm.addCostume(item.name + ".json", vmCostume);
    }
    render () {
        return (
            <LibraryComponent
                data={costumeLibraryContent}
                title="Costume Library"
                visible={this.props.visible}
                onItemSelected={this.handleItemSelected}
                onRequestClose={this.props.onRequestClose}
            />
        );
    }
}

CostumeLibrary.propTypes = {
    onRequestClose: PropTypes.func,
    visible: PropTypes.bool,
    vm: PropTypes.instanceOf(VM).isRequired
};

export default CostumeLibrary;
