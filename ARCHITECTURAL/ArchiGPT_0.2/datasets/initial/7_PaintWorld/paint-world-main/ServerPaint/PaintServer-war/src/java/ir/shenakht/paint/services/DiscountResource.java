/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ir.shenakht.paint.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import ir.shenakht.paint.domain.Discount;
import ir.shenakht.paint.interceptors.InterceptorConfrimUserCodeUserAndJudgeUser;
import ir.shenakht.paint.interceptors.InterceptorIsAdmin;
import ir.shenakht.paint.logic.interfaces.DiscountLogicIntf;
import ir.shenakht.paint.util.ConfigMapper;
import java.io.IOException;
import java.util.List;
import javax.ejb.EJB;
import javax.interceptor.Interceptors;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * REST Web Service
 *
 * @author hossien
 */
@Path("discounts")
public class DiscountResource {

    @EJB
    private DiscountLogicIntf dl;

    protected ObjectMapper mapper;

    public DiscountResource() {
        mapper = ConfigMapper.getInstance();
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Interceptors({InterceptorIsAdmin.class})
    public Response createDiscount(@HeaderParam("user_code") String userCode,
            String data) throws IOException {
        Discount discount = mapper.readValue(data, Discount.class);
        discount = dl.createDiscount(discount);
        if (discount != null) {
            String json = mapper.writeValueAsString(discount);
            return Response.status(Response.Status.CREATED).entity(json).build();
        }
        return Response.status(Response.Status.CONFLICT).build();
    }

    @PUT
    @Path("{discount_id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Interceptors({InterceptorIsAdmin.class})
    public Response updateDiscount(@HeaderParam("user_code") String userCode,
            @PathParam("discount_id") Integer discountId,
            String data) throws IOException {
        Discount discount = mapper.readValue(data, Discount.class);
        discount.setId(discountId);
        if (dl.updateDiscount(discount)) {
            String json = mapper.writeValueAsString(discount);
            return Response.status(Response.Status.OK).entity(json).build();
        }
        return Response.status(Response.Status.NOT_MODIFIED).build();
    }

    @DELETE
    @Path("{discount_id}")
    @Interceptors({InterceptorIsAdmin.class})
    public Response deleteDiscount(@HeaderParam("user_code") String userCode,
            @PathParam("discount_id") Integer discountId) {
        if (dl.deleteDiscount(discountId)) {
            return Response.status(Response.Status.OK).build();
        }
        return Response.status(Response.Status.NOT_MODIFIED).build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Interceptors({InterceptorConfrimUserCodeUserAndJudgeUser.class})
    public Response findAllDiscount(@HeaderParam("user_code") String userCode) throws JsonProcessingException {
        List<Discount> discounts = dl.findAllDiscount();
        if (discounts != null) {
            String json = mapper.writeValueAsString(discounts);
            return Response.status(Response.Status.OK).entity(json).build();
        }
        return Response.status(Response.Status.NO_CONTENT).build();
    }

}
