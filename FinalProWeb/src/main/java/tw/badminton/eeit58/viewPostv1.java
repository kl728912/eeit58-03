package tw.badminton.eeit58;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONStringer;
import org.json.JSONWriter;

/**
 * Servlet implementation class test4
 */
@WebServlet("/viewPostv1")
public class viewPostv1 extends HttpServlet {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/eeit58group3?useSSL=false";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "root";

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doPost(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String pageParam = request.getParameter("page");
        String limitParam = request.getParameter("limit");
        int page = 1;
        int limit = 10;
        if (pageParam != null && !pageParam.isEmpty()) {
            page = Integer.parseInt(pageParam);
        }
        if (limitParam != null && !limitParam.isEmpty()) {
            limit = Integer.parseInt(limitParam);
        }
        int offset = (page - 1) * limit;

        JSONStringer js = new JSONStringer();
        JSONWriter jw = js.array();
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
            String sql = "SELECT *, member.Icon FROM activity INNER JOIN member WHERE activity.host=member.id LIMIT ? OFFSET ?";
            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setInt(1, limit);
            statement.setInt(2, offset);
            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                String id = rs.getString("id");
                String activityTitle = rs.getString("activityTitle");
                String description = rs.getString("description");
                String activityTime = rs.getString("activityTime");
                String min = rs.getString("min");
                String max = rs.getString("max");
                String contact = rs.getString("contact");
                String locationSub = rs.getString("location");
                String reservation = rs.getString("reservation");
                String level = rs.getString("level");
                String icon = rs.getString("Icon");
                String memberName = rs.getString("memberName");
                String location = rs.getString("location");
                String pic = rs.getString("pic");
                String postTime = rs.getString("postTime");
                jw.object();
                jw.key("id").value(id);
                jw.key("activityTitle").value(activityTitle);
                jw.key("description").value(description);
                jw.key("activityTime").value(activityTime);
                jw.key("min").value(min);
                jw.key("max").value(max);
                jw.key("contact").value(contact);
                jw.key("locationSub").value(locationSub.substring(0, 3));
                jw.key("reservation").value(reservation);
                jw.key("level").value(level);
                jw.key("icon").value(icon);
                jw.key("memberName").value(memberName);
                jw.key("location").value(location);
                jw.key("pic").value(pic);
                jw.key("postTime").value(postTime);

                jw.endObject();
            }
            jw.endArray();
            conn.close();
            response.setCharacterEncoding("UTF-8");
            response.setContentType("application/json");
            response.getWriter().write(jw.toString());
        } catch (Exception e) {
            System.out.print(e);
        }
    }
}