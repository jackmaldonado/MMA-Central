import React, { Component } from 'react'
import { Image, Segment, Form, Button } from 'semantic-ui-react';

class BettingOdds extends Component {
    render() {
        return (
                  <Segment>
                      <h3>UFC on ESPN+ 18</h3>
                        <Image src='https://www.bestfightodds.com/events/1747.png' />
                    <Form>
                      <Form.Field>
                        <label>Event Title</label>
                        <input placeholder="First Name" />
                      </Form.Field>
                      <Form.Field>
                        <label>Event Date</label>
                        <input type="date" placeholder="Event Date" />
                      </Form.Field>
                      <Form.Field>
                        <label>City</label>
                        <input placeholder="City event is taking place" />
                      </Form.Field>
                      <Form.Field>
                        <label>Venue</label>
                        <input placeholder="Enter the Venue of the event" />
                      </Form.Field>
                      <Form.Field>
                        <label>Hosted By</label>
                        <input placeholder="Enter the name of person hosting" />
                      </Form.Field>
                      <Button positive type="submit">
                        Submit
                      </Button>
                      <Button type="button">Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}

export default BettingOdds;