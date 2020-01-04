import React from 'react';

const DatesRow = props => {
  const { date, venueUrl, venue, location, ticketUrl, fbUrl } = props;
  return (
    <tr>
      <td>{date}</td>
      <td>
        <a href={venueUrl} target="_blank">
          {venue}
        </a>
      </td>
      <td>{location}</td>

      <td className="align-right text-center">
        {fbUrl && (
          <a href={fbUrl} target="_blank">
            <i className="fab fa-facebook" /> Event
          </a>
        )}
      </td>
      <td className="align-right">
        {ticketUrl && (
          <a className="btn btn--primary" href={ticketUrl} target="_blank">
            Buy Tickets
          </a>
        )}
      </td>
    </tr>
  );
};

const TourTable = props => {
  const { tourDates } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Venue</th>
          <th>Location</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {tourDates.map((tourDate, i) => (
          <DatesRow
            key={i}
            date={tourDate.date}
            venueUrl={tourDate.venueUrl}
            venue={tourDate.venue}
            location={tourDate.location}
            ticketUrl={tourDate.ticketUrl}
            fbUrl={tourDate.fbEventUrl}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TourTable;
