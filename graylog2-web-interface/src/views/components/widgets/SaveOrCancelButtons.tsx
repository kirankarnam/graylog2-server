/*
 * Copyright (C) 2020 Graylog, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the Server Side Public License, version 1,
 * as published by MongoDB, Inc.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * Server Side Public License for more details.
 *
 * You should have received a copy of the Server Side Public License
 * along with this program. If not, see
 * <http://www.mongodb.com/licensing/server-side-public-license>.
 */
import * as React from 'react';

import { Button, ButtonToolbar } from 'components/graylog';

type Props = {
  onCancel: () => void,
  onFinish: () => void,
  disableSave?: boolean,
};

const SaveOrCancelButtons = ({ onFinish, onCancel, disableSave = false }: Props) => (
  <ButtonToolbar className="pull-right">
    <Button onClick={onFinish} bsStyle="primary" disabled={disableSave}>Save</Button>
    <Button onClick={onCancel}>Cancel</Button>
  </ButtonToolbar>
);

SaveOrCancelButtons.defaultProps = {
  disableSave: false,
};

export default SaveOrCancelButtons;
